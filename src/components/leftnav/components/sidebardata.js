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
        label: 'Đơn hàng',
        url: '/oder',
    },
    {
        label: 'Hệ thống',
        url: '/settings',
    }
]