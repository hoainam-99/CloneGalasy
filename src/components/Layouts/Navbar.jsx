'use client';

import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import store from "@/hooks/store/index";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link href='/'>Danh sách công việc</Link>, 'listTask', <img src="/navbar-icon/list-task.svg"/>),
//   getItem(<Link href=''>Quản lý dự án</Link>, 'jobManager', <img src="/navbar-icon/job-manager.svg"/>),
  getItem(<Link href=''>Đang theo dõi</Link>, 'follow', <img src="/navbar-icon/follow.svg"/>),
  { type: 'divider', },
  getItem(<Link href=''>Dự án đã ứng tuyển</Link>, 'applyJob', <img src="/navbar-icon/apply-job.svg"/>),
  getItem(<Link href=''>Dự án đang thực hiện</Link>, 'workJob', <img src="/navbar-icon/work-job.svg"/>),
//   getItem(<Link href=''>Dự án đã tạo</Link>, 'addTask', <img src="/navbar-icon/add-task.svg"/>),
//   getItem(<Link href=''>Dự án đã lưu</Link>, 'saveTask', <img src="/navbar-icon/save-task.svg"/>),
//   { type: 'divider', },
//   getItem(<Link href=''>Thanh toán gói Premium</Link>, 'premium', <img src="/navbar-icon/premium.svg"/>),
//   getItem(<Link href=''>Thanh toán gói VIP</Link>, 'vip', <img src="/navbar-icon/vip.svg"/>),
//   getItem(<Link href=''>Task Online</Link>, 'taskOnline', <img src="/navbar-icon/task-online.svg"/>),
//   getItem(<Link href=''>Task Transport</Link>, 'transport', <img src="/navbar-icon/transport.svg"/>),
//   getItem(<Link href=''>Task Loa động phổ thông</Link>, 'unskilledLabol', <img src="/navbar-icon/unskilled-labol.svg"/>),
//   getItem(<Link href=''>Task Giáo dục/ Huấn luyện</Link>, 'educationTask', <img src="/navbar-icon/education.svg"/>),
//   getItem(<Link href=''>Task Sự kiện</Link>, 'eventTask', <img src="/navbar-icon/event.svg"/>),
//   getItem(<Link href=''>Task Tư vấn</Link>, 'supportTask', <img src="/navbar-icon/support-task.svg"/>),
  { type: 'divider', },
  getItem(<Link href=''>Giới thiệu</Link>, 'introduce', <img src="/navbar-icon/introduce.svg"/>),
//   getItem(<Link href=''>Tin tức</Link>, 'blog', <img src="/navbar-icon/blog.svg"/>),
//   getItem(<Link href=''>Điều khoản, Quyền riêng tư</Link>, 'security', <img src="/navbar-icon/security.svg"/>),
//   getItem(<Link href=''>Chính sách & an toàn</Link>, 'lock', <img src="/navbar-icon/lock.svg"/>),
//   getItem(<Link href=''>Thử các tính năng mới</Link>, 'application', <img src="/navbar-icon/application.svg"/>),
//   { type: 'divider', },
//   getItem(<Link href=''>Quảng cáo</Link>, 'marketing', <img src="/navbar-icon/marketing.svg"/>),
//   getItem(<Link href=''>Dành cho nhà phát triển</Link>, 'forDev', <img src="/navbar-icon/for-dev.svg"/>),
  { type: 'divider', },
  getItem(<Link href=''>Setting</Link>, 'setting', <img src="/navbar-icon/setting.svg"/>),
//   getItem(<Link href=''>Báo cáo</Link>, 'report', <img src="/navbar-icon/report.svg"/>),
//   getItem(<Link href=''>Trợ giúp</Link>, 'support', <img src="/navbar-icon/support.svg"/>),
//   getItem(<Link href=''>Ý kiến phản hồi</Link>, 'feedback', <img src="/navbar-icon/feedback.svg"/>),
];

const Navbar = () => {
  const router = useRouter();
  const {collapsed} = store.getState();
  const [selectedKey, setSelectedKey] = useState([]);
  useEffect(() => {
    getSelectedKey();
  }, []);
  const getSelectedKey = () => {
    switch (true) {
      case router.route.includes("/tasks"):
        setSelectedKey(['jobManager']);
        break;
    
      default:
        setSelectedKey(['listTask']);
        break;
    }
  };

  const onClick = (e) => {
    setSelectedKey([e.key]);
    console.log('click ', e);
  };
  return (<div className="bg-white overflow-auto" style={{height: 'calc(100vh - 74px)'}}>
    <Menu
      inlineCollapsed={collapsed}
      onClick={onClick}
      selectedKeys={selectedKey}
      mode="inline"
      items={items}
    />
  </div>);
};

export default Navbar;
