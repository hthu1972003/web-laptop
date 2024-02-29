import { useRoutes } from 'react-router-dom'
import { path } from '~/constants/path'
import Home from '~/pages/Home'
import MainLayout from '~/layouts/MainLayout'
import Product from '~/pages/Product'
import Category from '~/pages/Category'
import Search from '~/pages/Search'
import Cart from '~/pages/Cart'
import SubLayout from '~/layouts/SubLayout'
import Login from '~/pages/Login'
import Register from '~/pages/Register'

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: path.home,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: path.product,
      element: (
        <MainLayout>
          <Product />
        </MainLayout>
      )
    },
    {
      path: path.category,
      element: (
        <MainLayout>
          <Category />
        </MainLayout>
      )
    },
    {
      path: path.search,
      element: (
        <MainLayout>
          <Search />
        </MainLayout>
      )
    },
    {
      path: path.cart,
      element: (
        <MainLayout>
          <Cart />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <SubLayout>
          <Login />
        </SubLayout>
      )
    },
    {
      path: '/register',
      element: (
        <SubLayout>
          <Register />
        </SubLayout>
      )
    }
  ])

  return routeElements
}

export default useRouteElements
