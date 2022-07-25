export const config = {
    hostname:  'http://localhost/nookarat'
}

export const configapi = {
    test: '',
    insertcustomer: config.hostname + '/admin/customer/insertcustomer.php',
    getone: config.hostname + '/admin/customer/getcustomer.php',
    createrequest: config.hostname + '/admin/customer/requestcustomer.php',
    addnews: config.hostname + '/admin/news/addnews.php',
    imageupload: config.hostname + '/admin/uploadimage.php',
    getlistnews: config.hostname + '/admin/news/getlistnews.php',
    getcontent: config.hostname + '/api/tintuc/getcontent.php',
    editnew: config.hostname + '/admin/news/editnew.php'
}