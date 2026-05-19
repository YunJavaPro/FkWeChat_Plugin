import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Menu, X, ExternalLink, Github } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100">
            <Package className="h-4.5 w-4.5 text-gray-700" />
          </div>
          <span className="text-base font-semibold text-gray-900">FkWeChat</span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* 弹出菜单 */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6">
            <div className="space-y-1">
              <a
                href="https://YunJavaPro.github.io/FkWeChat_Plugin_Docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <ExternalLink className="h-4 w-4" />
                开发文档
              </a>
              <a
                href="https://github.com/YunJavaPro/FkWeChat_Plugin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="h-4 w-4" />
                跳转仓库
              </a>
              <a
                href="https://github.com/YunJavaPro/FkWeChat_Plugin/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="h-4 w-4" />
                上传步骤
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
