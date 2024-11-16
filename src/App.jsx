import LandingPage from "./Landing Page/Landingpage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import SemesterCateogry from "./SemesterCateogry"
import SemOneSubject from "./Subjects & chapters/sem1subject"
import SemTwoSubject from "./Subjects & chapters/sem2subject"
import SemThreeSubject from "./Subjects & chapters/sem3subject"
import SemFourSubject from "./Subjects & chapters/sem4subject"
import SemFiveSubject from "./Subjects & chapters/sem5subject"
import SemSixSubject from "./Subjects & chapters/sem6subject"
import Chapters from "./Subjects & chapters/chapters"
import Semchaptervideos from "./semester chapter videos/sem1chaptervideos"
import Sem2chaptervideos from "./semester chapter videos/sem2chaptervideos"
import Sem4chaptervideos from "./semester chapter videos/sem4chaptervideos"
import Sem5chaptervideos from "./semester chapter videos/sem5chaptervideos"
import Sem6chaptervideos from "./semester chapter videos/sem6chaptervideos"
import About from "./pages/about"
import Help from "./pages/help"
import Contact from "./pages/contact"
import SignupPage from "./pages/signup"
import Login from "./pages/login"


function App () {

const router = createBrowserRouter([
{
  path: '/',
  element: <LandingPage />
},
{
  path: '/category',
  element: <SemesterCateogry />
},
{
  path: '/sem1subject',
  element: <SemOneSubject one={4} two={4} three={4}/>
},
{
  path: '/sem2subject',
  element : <SemTwoSubject one={3}/>
},
{
  path: '/sem3subject',
  element: <SemThreeSubject />
},
{
  path: '/sem4subject',
  element: <SemFourSubject one={4} two={4} three={4} four={10}/>
},
{
  path: '/sem5subject',
  element: <SemFiveSubject one={5} three={4}/>
},
{
  path: '/sem6subject',
  element: <SemSixSubject one={1} two={4} three={4}/>
},
{
  path: '/chapters/:number/:sub/:sem',
  element: <Chapters />
},
{
  path: '/chaptervideos1/:number/:sub',
  element: <Semchaptervideos />
},
{
  path: '/chaptervideos2/:number/:sub',
  element: <Sem2chaptervideos />
},
{
  path: '/chaptervideos4/:number/:sub',
  element: <Sem4chaptervideos />
},{
  path: '/chaptervideos5/:number/:sub',
  element: <Sem5chaptervideos />
},{
  path: '/chaptervideos6/:number/:sub',
  element: <Sem6chaptervideos />
},
{
  path: '/about',
  element: <About />
},
{
  path: '/help',
  element: <Help />
},
{
  path: '/contact',
  element: <Contact />
},
{
  path: '/signup',
  element: <SignupPage />
},
{
  path: '/login',
  element: <Login />
}
])

return(
<>
<RouterProvider router={router}/>
</>
)
}

export default App