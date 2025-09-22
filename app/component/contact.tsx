"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Shuffle,
  AlertCircle,
  BookOpen,
  Wallet,
  Mail,
  ShieldCheck,
  MonitorPlay,
  ChevronDown,
} from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

// Data for the FAQ section, including icons
const faqData = [
  {
    icon: <Briefcase size={20} className="text-gray-500 dark:text-gray-400" />,
    question: "Làm thế nào để tạo tài khoản?",
    answer:
      'Để tạo tài khoản, chỉ cần nhấp vào nút "Đăng nhập" ở góc trên bên phải trang,sau đó chọn đăng ký và điền thông tin của bạn. Chỉ mất một phút!',
  },
  {
    icon: <Shuffle size={20} className="text-gray-500 dark:text-gray-400" />,
    question: "Tôi có thể thay đổi gói đăng ký của mình không?",
    answer:
      "Có, bạn có thể nâng cấp hoặc hạ cấp gói đăng ký của mình bất cứ lúc nào từ cài đặt tài khoản. Các thay đổi sẽ được tính theo tỷ lệ.",
  },
  {
    icon: (
      <AlertCircle size={20} className="text-gray-500 dark:text-gray-400" />
    ),
    question: "Điều gì xảy ra nếu tôi quên mật khẩu?",
    answer:
      "Đừng lo lắng! Bạn có thể dễ dàng đặt lại mật khẩu của mình bằng cách nhấp vào liên kết 'Quên mật khẩu' trên trang đăng nhập. Chúng tôi sẽ gửi một liên kết đặt lại đến email của bạn.",
  },
  {
    icon: <Wallet size={20} className="text-gray-500 dark:text-gray-400" />,
    question: "Các phương thức thanh toán mà bạn chấp nhận là gì?",
    answer:
      "Chúng tôi chấp nhận tất cả các thẻ tín dụng lớn, bao gồm Visa, MasterCard và các ngân hàng nội địa. Chúng tôi cũng hỗ trợ thanh toán qua PayPal.",
  },
  {
    icon: <Mail size={20} className="text-gray-500 dark:text-gray-400" />,
    question: "Làm thế nào để tôi liên hệ với bộ phận hỗ trợ khách hàng?",
    answer:
      "Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng 24/7. Bạn có thể liên hệ với chúng tôi qua biểu mẫu liên hệ trên trang web, qua email tại support@example.com hoặc qua trò chuyện trực tiếp.",
  },
  {
    icon: (
      <ShieldCheck size={20} className="text-gray-500 dark:text-gray-400" />
    ),
    question: "Dữ liệu cá nhân của tôi có an toàn không?",
    answer:
      "Chắc chắn rồi. Chúng tôi ưu tiên quyền riêng tư và bảo mật của bạn. Chúng tôi sử dụng công nghệ mã hóa và giao thức bảo mật tiên tiến nhất để bảo vệ tất cả dữ liệu của bạn.",
  },
  {
    icon: (
      <MonitorPlay size={20} className="text-gray-500 dark:text-gray-400" />
    ),
    question: "Bạn có video hướng dẫn không?",
    answer:
      'Có, chúng tôi có một thư viện video hướng dẫn bao gồm tất cả các tính năng chính của nền tảng. Bạn có thể tìm thấy chúng trên kênh YouTube của chúng tôi và trong phần "Hướng dẫn".',
  },
];


interface AccordionItemProps {
  item: {
    icon: React.ReactNode;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        className="flex items-center justify-between w-full p-4 text-left focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:pl-6"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-4">
          <div className="transition-transform duration-300 hover:scale-110">
            {item.icon}
          </div>
          <span className="text-base font-medium text-gray-800 dark:text-gray-200">
            {item.question}
          </span>
        </div>
        <ChevronDown
          size={20}
          className={`transform transition-transform duration-300 text-gray-500 dark:text-gray-400 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pl-12 bg-gray-50 dark:bg-gray-800/50">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};


export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2); 
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ delay: 200 });
  const { containerRef: accordionRef, visibleItems } = useStaggeredAnimation(faqData.length, 150);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="contact" className="flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-900">
      <style>{`
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-left { animation: slideInFromLeft 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>
      
      <div className="w-full max-w-2xl mx-auto">
        <div className="p-4">
          <div 
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-800 ease-out ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
              Câu hỏi thường gặp
            </h1>
          </div>
          
          <div 
            ref={accordionRef as React.RefObject<HTMLDivElement>}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg"
          >
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{
                  transitionDelay: visibleItems.has(index) ? `${index * 100}ms` : '0ms'
                }}
              >
                <AccordionItem
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
