import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Download, Loader2, CheckCircle, FileText } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { useStore } from '@/store/useStore';
import { LoadingSpinner, EmptyState } from '@/components/ui';

export default function PluginDetail() {
  const { folder } = useParams<{ folder: string }>();
  const { currentPlugin, isLoading, error, fetchPluginDetail, clearCurrentPlugin } = useStore();
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    if (folder) {
      fetchPluginDetail(folder);
    }
    return () => {
      clearCurrentPlugin();
    };
  }, [folder, fetchPluginDetail, clearCurrentPlugin]);

  const handleDownloadZip = async () => {
    if (!currentPlugin) return;
    
    setDownloading(true);
    try {
      const zip = new JSZip();
      
      // 打包插件文件夹内所有文件
      if (currentPlugin.pluginFiles) {
        for (const [relativePath, content] of Object.entries(currentPlugin.pluginFiles)) {
          zip.file(relativePath, content);
        }
      }
      
      // Generate zip file
      const content = await zip.generateAsync({ type: 'blob' });
      
      // Download
      saveAs(content, `${currentPlugin.folder}.zip`);
      
      // Show success message
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to create zip:', err);
    } finally {
      setDownloading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <LoadingSpinner size="md" text="加载插件详情..." />
      </div>
    );
  }

  if (error || !currentPlugin) {
    return (
      <div className="min-h-[60vh]">
        <EmptyState
          icon="error"
          title="加载失败"
          description={error || '插件不存在'}
          action={
            <Link
              to="/"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              返回列表
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        {/* 返回按钮 */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          返回插件列表
        </Link>

        {/* 插件信息 */}
        <div className="rounded-md border border-gray-200 p-5 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gray-100 text-gray-700 font-semibold">
              {currentPlugin.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-xl font-bold text-gray-900">{currentPlugin.name}</h1>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  v{currentPlugin.version}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <User className="h-4 w-4" />
                {currentPlugin.author}
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">{currentPlugin.description || '暂无描述'}</p>
        </div>

        {/* 下载按钮 */}
        <div className="rounded-md border border-gray-200 p-5 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-2">下载插件</h2>
          <p className="text-gray-600 text-sm mb-4">
            下载包含所有文件的完整插件压缩包
          </p>
          
          <button
            onClick={handleDownloadZip}
            disabled={downloading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {downloading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                正在打包...
              </>
            ) : downloadSuccess ? (
              <>
                <CheckCircle className="h-4 w-4" />
                下载成功
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                下载插件压缩包
              </>
            )}
          </button>
        </div>

        {/* 插件说明 */}
        {(() => {
          const readmeKey = Object.keys(currentPlugin.pluginFiles || {}).find(
            (key) => key.toLowerCase() === 'readme.md'
          );
          const readmeContent = readmeKey ? currentPlugin.pluginFiles[readmeKey] : null;

          if (!readmeContent) return null;

          return (
            <div className="rounded-md border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-4 w-4 text-gray-500" />
                <h2 className="text-sm font-semibold text-gray-900">插件说明</h2>
              </div>
              <div className="markdown-body max-w-full overflow-x-auto text-gray-700">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={{
                    h1: ({ ...props }) => <h1 className="text-2xl font-bold mt-6 mb-4 border-b border-gray-200 pb-2" {...props} />,
                    h2: ({ ...props }) => <h2 className="text-xl font-bold mt-5 mb-3 border-b border-gray-200 pb-1" {...props} />,
                    h3: ({ ...props }) => <h3 className="text-lg font-semibold mt-4 mb-2" {...props} />,
                    h4: ({ ...props }) => <h4 className="text-base font-semibold mt-3 mb-1" {...props} />,
                    p: ({ ...props }) => <p className="mb-3 leading-relaxed" {...props} />,
                    ul: ({ ...props }) => <ul className="list-disc list-inside mb-3 space-y-1" {...props} />,
                    ol: ({ ...props }) => <ol className="list-decimal list-inside mb-3 space-y-1" {...props} />,
                    li: ({ ...props }) => <li className="text-gray-700" {...props} />,
                    blockquote: ({ ...props }) => (
                      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600 bg-gray-50 rounded-r-md py-2 pr-2" {...props} />
                    ),
                    code: ({ className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || '');
                      return match ? (
                        <div className="my-4 rounded-md overflow-hidden">
                          <pre className="bg-gray-50 p-4 overflow-x-auto text-sm">
                            <code className={className} {...props}>
                              {children}
                            </code>
                          </pre>
                        </div>
                      ) : (
                        <code className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                          {children}
                        </code>
                      );
                    },
                    pre: ({ ...props }) => <>{props.children}</>,
                    a: ({ ...props }) => (
                      <a className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
                    ),
                    table: ({ ...props }) => (
                      <div className="my-4 overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-300" {...props} />
                      </div>
                    ),
                    thead: ({ ...props }) => <thead className="bg-gray-50" {...props} />,
                    th: ({ ...props }) => <th className="border border-gray-300 px-4 py-2 text-left font-semibold" {...props} />,
                    td: ({ ...props }) => <td className="border border-gray-300 px-4 py-2" {...props} />,
                    img: ({ ...props }) => (
                      <img className="max-w-full h-auto rounded-md my-4" loading="lazy" {...props} />
                    ),
                  }}
                >
                  {readmeContent}
                </ReactMarkdown>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}