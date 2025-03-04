let data = [
  {
    "id": "tasks",
    "EN": {
      "title": "Tasks",
      "items": ["Task list", "Task report", "Task Autocomplete", "Report", "Periodical report", "Project", "Project group", "Trao đổi"]
    },
    "VN": {
      "title": "Công Việc",
      "items": [
        "Danh Sách Công Việc",
        "Thống kê",
        "Công việc mẫu",
        "Báo cáo",
        "Báo cáo định kỳ",
        "Dự án công việc",
        "Nhóm công việc",
        "Trao đổi"
      ]
    },
    'routing': [
      '/task-list',
      '/task-report',
      '/task-samples',
      "/report",
      "/periodic-report",
      "/project",
      "/project-group",
      "",
    ],

    'icon': ' uil-receipt-alt'
  },
  {
    "id": "event",
    "EN": {
      "title": "Event",

      "items": [
        "Event list",
        "New event",
        "Event Sample"
      ]
    },
    "VN": {
      "title": "Lịch tuần",
      "items": [
        "Danh sách lịch",
        "Đăng ký lịch",
        "Lịch tuần mẫu"
      ]
    },
    "routing": [
      '/event-list',
      '/new-event',
      '/event-sample'
      

    ],

    'icon': 'uil-calendar-alt'
  },
  {
    "id": "client",
    "EN": {
      "title": "Client",
      "items": [
        "Customers",
        "Contract",
        "Catalog",
        "Report",
        "Search"
      ]
    },
    "VN": {
      "title": "Khách hàng",
      "items": [
        "Khách hàng",
        "Hợp đồng",
        "Danh mục",
        "Báo cáo",
        "Tìm kiếm"
      ]
    },
    "routing": [
      '/customers',
      '/contract',
      '/catalog',
      '/report',
      '/search'

    ],
    'icon': 'uil-users-alt'
  },
  {
    "id": "social",
    "EN": {
      "title": "Cong Thong Tin [Eng]",
      "items": ["Notification", "Library", "News", "Images", "Contact", "Survey"]
    },
    "VN": {
      "title": "Cổng Thông Tin",
      "items": ["Thông báo", "Thư Viện", "Tin tức", "Hình ảnh", "Danh bạ"/*, "Thăm dò khảo sát"*/
      ]
    },
    "routing": ['/notification', '/library', '/news', '/images', '/contact'/*, '/survey'*/
    ],
    'icon': 'uil-globe'
  },
  {
    "id": "document",
    "EN": {
      "title": "Van ban [Eng]",
      "items": ["Inoming Text","Text go","Internal Text","Search","Create Folder","Text Source","Text Inheritance"]
    },
    "VN": {"title": "Văn bản","items": ["Văn bản đến","Văn bản đi","Văn bản nội bộ","Tìm kiếm","Tạo thư mục","Nguồn văn bản","Kế thừa văn bản"
      ]
    },
    "routing": [
      '/incoming-text',
      '/text-go',
      '/internal-text',
      '/search',
      '/create-folder',
      '/text-source',
      '/text-inheritance'
    ],
    'icon': 'uil-notes'
  },
  {
    "id": "sign-documents",
    "EN": {
      "title": "Sign Documents",
      "items": [
        "sign process",
        "Signator list"

      ]
    },
    "VN": {
      "title": "Ký văn bản",
      "items": [
        "Trình ký văn bản",
        "Danh sách trình ký"

      ]
    },
    "routing": [
      '/sign-process',
      '/signator-list'
    ],
    'icon': 'uil-notes'
  },
  {
    "id": "personal",
    "EN": {
      "title": "Personal",
      "items": [
        "event",
        "File cabinet",
        "Business card"
      ]
    },
    "VN": {
      "title": "Cá nhân",
      "items": [
        "Lịch cá nhân",
        "Tủ hồ sơ",
        "Danh thiếp"
      ]
    },
    "routing": [
      '/event',
      '/file-cabinet',
      '/business-card'
    ],
    'icon': 'uil-smile'
  },
  {
    "id": 'admin',
    "VN": {
      'title': "Admin",
      'items': [
        'Người Dùng',
      ]
    },
    "EN": {
      'title': "Admin",
      'items': [
        'Users',
      ]
    },
    "routing": [
      '/users'
    ],
    "icon": "uil-padlock"
  }
];

export default data;
