import Footer from '~/components/Footer'
import SubHeader from '~/components/SubHeader'

function SubLayout({ children }) {
  return (
    <div>
      <SubHeader />
      {children}
      <Footer />
    </div>
  )
}

export default SubLayout
