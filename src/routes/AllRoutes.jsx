import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Marketing } from '../hooks/Marketing'
import { Signin } from '../views/auth/Signin'
import { Signup } from '../views/auth/Signup'
import Home from '../pages/Home'
import ProtectedRoutes from '../lib/ProtectedRoutes'
import CreatePlans from '../views/create-plans/CreatePlans'
import { PreviewPlan } from '../views/create-plans/PreviewPlan'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Marketing />} />
        <Route
          path='/Sign-in'
          element={
            <ProtectedRoutes pageType='auth-page'>
              <Signin />
            </ProtectedRoutes>
					}
				/>
        <Route
          path='/Sign-up'
          element={
            <ProtectedRoutes pageType='auth-page'>
              <Signup />
            </ProtectedRoutes>
					}
				/>
        <Route
          path='/Home'
          element={
            <ProtectedRoutes pageType='app-page'>
              <Home />
            </ProtectedRoutes>
					}
				/>
        <Route
          path='/create-plans'
          element={
            <ProtectedRoutes pageType='app-page'>
              <CreatePlans />
            </ProtectedRoutes>
					}
				/>
        <Route
          path='/preview-plan'
          element={
            <ProtectedRoutes pageType='app-page'>
              <PreviewPlan />
            </ProtectedRoutes>
					}
				/>
      </Routes>
    </div>
  )
}

export default AllRoutes
