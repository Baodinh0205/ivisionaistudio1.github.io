import React from 'react';
import JSZip from 'jszip';

const Header: React.FC = () => {
  const handleExportZip = () => {};/g, 'const handleExportZip = () => {};');
        }

        zip.file(filePath, content);
      }

      // Generate the ZIP blob
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ivision-ai-studio-project.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to generate ZIP. Please try again.');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-black/40 backdrop-blur-3xl border-b border-white/5">
      <div className="flex items-center">
        <div className="flex flex-col items-start leading-none gap-1">
          <span className="text-[10px] font-black tracking-[0.4em] text-[#3E7BFA] uppercase w-full text-left whitespace-nowrap">
            CREATIVE AI
          </span>
          <span className="text-4xl md:text-5xl font-black tracking-[-0.06em] text-white uppercase leading-[0.8] whitespace-nowrap">
            IVISION
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 md:gap-4">
        

        

        <a 
          href="https://www.facebook.com/baodinh005" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all duration-300 active:scale-90"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
          </svg>
        </a>

        <a 
          href="https://www.instagram.com/dinh.baodinh/" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all duration-300 active:scale-90"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
        </a>

        <a 
          href="https://www.behance.net/dinhgiabao" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all duration-300 active:scale-90"
        >
          <span className="text-base font-extrabold tracking-tight select-none">Be</span>
        </a>
      </div>
    </header>
  );
};

export default Header;