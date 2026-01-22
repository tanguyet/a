
import React from 'react';

export const Integration: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="fas fa-link text-indigo-600 mr-3"></i>
          Hướng dẫn nhúng vào AppSheet
        </h2>
        
        <div className="space-y-6">
          <section className="border-l-4 border-indigo-500 pl-4">
            <h3 className="font-bold text-lg text-gray-800">Bước 1: Triển khai ứng dụng (Deploy)</h3>
            <p className="text-gray-600 text-sm mt-1">
              Bạn cần đưa mã nguồn này lên một dịch vụ Hosting (Vercel, Netlify hoặc GitHub Pages). 
              Sau khi deploy, bạn sẽ có một đường dẫn URL (ví dụ: <code>https://your-loyalty-app.vercel.app</code>).
            </p>
          </section>

          <section className="border-l-4 border-emerald-500 pl-4">
            <h3 className="font-bold text-lg text-gray-800">Bước 2: Cấu hình trên AppSheet</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-2">
              <li>Mở trình soạn thảo <strong>AppSheet</strong> của bạn.</li>
              <li>Đi tới menu <strong>UX</strong> -> <strong>Views</strong>.</li>
              <li>Nhấn <strong>+ New View</strong>.</li>
              <li>Tại mục <strong>View Type</strong>, chọn <strong>web page</strong>.</li>
              <li>Tại mục <strong>Url</strong>, dán đường dẫn ứng dụng đã deploy ở Bước 1.</li>
            </ul>
          </section>

          <section className="border-l-4 border-amber-500 pl-4">
            <h3 className="font-bold text-lg text-gray-800">Bước 3: Đồng bộ dữ liệu</h3>
            <p className="text-gray-600 text-sm mt-1">
              Để AppSheet và Giao diện này dùng chung dữ liệu, bạn nên kết nối cả hai với cùng một <strong>Google Sheet</strong>. 
              AppSheet dùng cho Admin quản lý, còn Giao diện này dùng cho Nhân viên trải nghiệm.
            </p>
          </section>
        </div>

        <div className="mt-10 p-6 bg-indigo-50 rounded-2xl">
          <h4 className="font-bold text-indigo-900 mb-2">Tại sao nên dùng cách này?</h4>
          <p className="text-indigo-700 text-sm">
            AppSheet rất mạnh về quản lý dữ liệu nhưng giao diện thường bị gò bó. 
            Bằng cách nhúng giao diện Custom này, bạn sẽ có một ứng dụng Loyalty chuyên nghiệp như các tập đoàn lớn, 
            trong khi vẫn giữ được sự tiện lợi của AppSheet ở phía sau.
          </p>
        </div>
      </div>
    </div>
  );
};
