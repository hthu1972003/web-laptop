import { useRoutes } from 'react-router-dom'
import Home from '~/pages/Home'
import MainLayout from '~/layouts/MainLayout'
import Product from '~/pages/Product'
import Category from '~/pages/Category'
import Search from '~/pages/Search'
import Cart from '~/pages/Cart'

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: '/product',
      element: (
        <MainLayout>
          <Product />
        </MainLayout>
      )
    },
    {
      path: '/category',
      element: (
        <MainLayout>
          <Category />
        </MainLayout>
      )
    },
    {
      path: '/search',
      element: (
        <MainLayout>
          <Search />
        </MainLayout>
      )
    },
    {
      path: '/cart',
      element: (
        <MainLayout>
          <Cart />
        </MainLayout>
      )
    }
  ])

  return routeElements
}

export default useRouteElements
