"use client";

import { useEffect, useState } from "react";

export default function GlobalLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // giả lập chờ 2s, hoặc có thể thay bằng fetch / điều kiện khác
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // khi xong thì ẩn

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
    </div>
  );
}
