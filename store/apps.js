export const state = () => ({
  apps: [
    { id: 1, 
      name: 'پایگاه دانش',
      key: 'knowledgebase',
      category: 'عمومی',
      description: 'ابزاری برای نگهداری اطلاعات و دسته بندی آنها میباشد.' },
    { id: 2,
      name: 'نرم افزار مدرسه نمونه میکروسرویس',
      key: 'sample-school-microservice',
      category: 'عمومی',
      description: 'نمونه ای از نرم افزار با چند سرویس میباشد.' }
  ],
  appDetails: {
    id: 1,
    name: 'پایگاه دانش',
    key: 'knowledgebase',
    category: 'عمومی',
    owner: 'تیم تولید دیپلوکا',
    description: 'ابزاری برای نگهداری اطلاعات و دسته بندی آنها میباشد.'
  }
})

export const getters = {
    apps: state => state.apps,
    appDetails: state => state.appDetails,
}