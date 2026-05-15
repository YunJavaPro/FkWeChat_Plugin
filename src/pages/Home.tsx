import { useEffect, useState, useRef } from 'react';
import { Search, Package } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { PluginCard, LoadingSpinner, EmptyState } from '@/components/ui';

// 保存滚动位置的全局变量
let scrollPosition = 0;

export default function Home() {
  const { plugins, isLoading, error, fetchPlugins } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchPlugins();
  }, [fetchPlugins]);

  // 恢复滚动位置
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = scrollPosition;
    }

    // 保存滚动位置
    const handleScroll = () => {
      if (container) {
        scrollPosition = container.scrollTop;
      }
    };

    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredPlugins = plugins.filter((plugin) => {
    return (
      searchQuery === '' ||
      plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plugin.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plugin.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* 固定头部 */}
      <div className="flex-shrink-0 border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
          <h1 className="text-xl font-bold text-gray-900 mb-1">插件仓库</h1>
          <p className="text-sm text-gray-600 mb-4">
            查找并下载适合的插件，提升使用体验
          </p>
          
          {/* 搜索框 */}
          <div className="max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索插件..."
                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 可滚动的插件列表 */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto min-h-0">
        <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
          {isLoading ? (
            <div className="flex h-48 items-center justify-center">
              <LoadingSpinner size="md" text="加载插件中..." />
            </div>
          ) : error ? (
            <EmptyState
              icon="error"
              title="加载失败"
              description={error}
              action={
                <button
                  onClick={() => fetchPlugins()}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  重试
                </button>
              }
            />
          ) : filteredPlugins.length === 0 ? (
            <EmptyState
              icon="package"
              title={plugins.length === 0 ? '暂无插件' : '未找到匹配的插件'}
              description={
                plugins.length === 0
                  ? '欢迎提交你的第一个插件！'
                  : '尝试调整搜索条件'
              }
            />
          ) : (
            <>
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">
                  共 <span className="font-semibold text-gray-900">{filteredPlugins.length}</span> 个插件
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pb-5">
                {filteredPlugins.map((plugin) => (
                  <PluginCard key={plugin.id} plugin={plugin} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
