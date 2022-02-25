import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header.jsx'
import FeedbackList from './Components/FeedbackList.jsx'
import FeedbackStats from './Components/FeedbackStats.jsx'
import FeedbackForm from './Components/FeedbackForm.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AboutIconLink from './Components/AboutIconLink.jsx'
import { FeedbackProvider } from './context/FeedbackContext.js'
function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>

                        </Route>


                        <Route path='/about' element={<AboutPage />}></Route>

                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App