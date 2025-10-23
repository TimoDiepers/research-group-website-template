import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { ScrollRestoration } from './components/layout/ScrollRestoration'
import { HomePage } from './pages/HomePage'
import { ResearchOverviewPage } from './pages/ResearchOverviewPage'
import { ResearchAreaPage } from './pages/ResearchAreaPage'
import { TeamPage } from './pages/TeamPage'
import { TeachingPage } from './pages/TeachingPage'

function App() {
  return (
    <MainLayout>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchOverviewPage />} />
        <Route path="/research/:slug" element={<ResearchAreaPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/teaching" element={<TeachingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  )
}

export default App
