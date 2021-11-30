import {
  ElButton,
  ElMain,
  ElHeader,
  ElFooter,
  ElAside,
  ElContainer,
  ElCard,
  ElRow,
  ElCol,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElAffix
} from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElMain)
  app.use(ElHeader)
  app.use(ElFooter)
  app.use(ElAside)
  app.use(ElContainer)
  app.use(ElCard)
  app.use(ElRow)
  app.use(ElCol)
  app.use(ElMenuItemGroup)
  app.use(ElMenu)
  app.use(ElMenuItem)
  app.use(ElAffix)
}
