import { useState } from 'react'
import { useStore } from '@/store'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { User, Lock, Mail } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

type LoginFormData = z.infer<typeof loginSchema>

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

type RegisterFormData = z.infer<typeof registerSchema>

export function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const { login } = useStore(state => ({ login: state.login }))

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors, isSubmitting: isLoginSubmitting }
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })

  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors, isSubmitting: isRegisterSubmitting }
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) })

  const onLoginSubmit = (data: LoginFormData) => {
    // Mock login
    login({ id: '1', name: 'John Doe', email: data.email }, 'mock-token')
  }

  const onRegisterSubmit = (data: RegisterFormData) => {
    // Mock registration
    console.log('Register data:', data)
    setIsLogin(true)
  }

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md p-8 bg-background-surface rounded-2xl shadow-lg border border-white/10"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            {isLogin ? 'Sign In' : 'Create Account'}
          </h1>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-primary-500 hover:underline"
          >
            {isLogin ? 'Create account' : 'Sign in'}
          </button>
        </div>

        {isLogin ? (
          <form onSubmit={handleLoginSubmit(onLoginSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  {...registerLogin('email')}
                  className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${loginErrors.email ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
                <Mail className="absolute right-3 top-3 text-gray-400" size={18} />
              </div>
              {loginErrors.email && (
                <p className="mt-1 text-sm text-red-500">{loginErrors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  {...registerLogin('password')}
                  className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${loginErrors.password ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
                <Lock className="absolute right-3 top-3 text-gray-400" size={18} />
              </div>
              {loginErrors.password && (
                <p className="mt-1 text-sm text-red-500">{loginErrors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoginSubmitting}
              className="w-full py-2.5 mt-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoginSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit(onRegisterSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  {...registerRegister('name')}
                  className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${registerErrors.name ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
                <User className="absolute right-3 top-3 text-gray-400" size={18} />
              </div>
              {registerErrors.name && (
                <p className="mt-1 text-sm text-red-500">{registerErrors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  {...registerRegister('email')}
                  className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${registerErrors.email ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
                <Mail className="absolute right-3 top-3 text-gray-400" size={18} />
              </div>
              {registerErrors.email && (
                <p className="mt-1 text-sm text-red-500">{registerErrors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  {...registerRegister('password')}
                  className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${registerErrors.password ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
                <Lock className="absolute right-3 top-3 text-gray-400" size={18} />
              </div>
              {registerErrors.password && (
                <p className="mt-1 text-sm text-red-500">{registerErrors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isRegisterSubmitting}
              className="w-full py-2.5 mt-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isRegisterSubmitting ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  )
}