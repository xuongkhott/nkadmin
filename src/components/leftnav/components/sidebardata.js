export const SidebarData = [
    {
        label: 'Trang chủ',
        url: '/',
        subMenu: [
            {
                label: 'Thống kê',
                url: '/chart'
            },
            {
                label: 'Báo cáo',
                url: '/report'
            }
        ]
    },
    {
        label: 'Hóa đơn',
        url: '/invoice',
    },
    {
        label: 'Sản phẩm',
        url: '/products',
        subMenu: [
            {
                label: 'Danh sách',
                url: '/products/all'
            },
            {
                label: 'Thêm mới',
                url: '/products/add'
            }
        ]
    },
    {
        label: 'Bài viết',
        url: '/news',
        subMenu: [
            {
                label: 'Danh sách',
                url: '/news'
            },
            {
                label: 'Thêm mới',
                url: '/news/add'
            }
        ]
    },
    {
        label: 'Đơn hàng',
        url: '/oder',
    },
    {
        label: 'Khách hàng',
        url: '/customers',
    },
    {
        label: 'Hệ thống',
        url: '/settings',
    }
]