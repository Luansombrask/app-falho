"use client"

import { useState, useRef } from 'react'
import { Home, TrendingUp, Settings, Plus, Search, Footprints, Flame, Droplets, Clock, MapPin, Zap, Upload, User, Calendar, Heart, ChevronRight, Star, CheckCircle, Target, Award, Trophy, Medal, BarChart3, PieChart, Activity, Filter, ChevronDown, ChevronLeft, Camera, Bell, Shield, Globe, Palette, Edit, Save, X, Sparkles, Crown, Rocket } from 'lucide-react'

export default function NutritionApp() {
  const [activeTab, setActiveTab] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [showPhotoUpload, setShowPhotoUpload] = useState(false)
  const [showAddMenu, setShowAddMenu] = useState(false)
  const [progressPeriod, setProgressPeriod] = useState('week') // day, week, month
  const [showPeriodFilter, setShowPeriodFilter] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)
  const fileInputRef = useRef(null)

  // Estados para as telas de configurações
  const [settingsView, setSettingsView] = useState('main') // main, profile, goals, preferences
  const [isEditing, setIsEditing] = useState(false)

  // Estados para dados do perfil
  const [profileData, setProfileData] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    age: 28,
    height: 175,
    weight: 71.5,
    activityLevel: 'Moderado',
    goal: 'Perder peso',
    targetWeight: 68
  })

  // Estados para metas
  const [goalsData, setGoalsData] = useState({
    dailyCalories: 2200,
    dailySteps: 10000,
    dailyWater: 2.5,
    dailyProtein: 120,
    weeklyWorkouts: 4,
    sleepHours: 8
  })

  // Estados para preferências
  const [preferencesData, setPreferencesData] = useState({
    notifications: {
      meals: true,
      water: true,
      exercise: false,
      sleep: true
    },
    privacy: {
      shareProgress: false,
      publicProfile: false,
      dataCollection: true
    },
    language: 'Português',
    theme: 'Claro'
  })

  // Função para abrir câmera e identificar alimento
  const handleCameraCapture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  // Função para processar a imagem capturada
  const handleImageCapture = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    setIsAnalyzing(true)
    setShowPhotoUpload(true)

    // Simular análise de IA (em produção, seria uma chamada para API de reconhecimento)
    setTimeout(() => {
      const mockResults = [
        {
          food: 'Salada Caesar com Frango',
          confidence: 92,
          calories: 420,
          protein: 35,
          carbs: 18,
          fat: 22,
          portion: '1 porção média'
        },
        {
          food: 'Pão Integral',
          confidence: 88,
          calories: 180,
          protein: 8,
          carbs: 32,
          fat: 3,
          portion: '2 fatias'
        }
      ]
      
      setAnalysisResult(mockResults)
      setIsAnalyzing(false)
    }, 3000)
  }

  // Função para adicionar alimento identificado ao diário
  const addToDaily = (food) => {
    // Aqui seria a lógica para adicionar ao diário do usuário
    console.log('Adicionando ao diário:', food)
    setShowPhotoUpload(false)
    setAnalysisResult(null)
    // Reset do input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Função para salvar dados do perfil
  const saveProfileData = () => {
    setIsEditing(false)
    // Aqui seria a lógica para salvar no backend
    console.log('Salvando dados do perfil:', profileData)
  }

  // Função para salvar metas
  const saveGoalsData = () => {
    setIsEditing(false)
    // Aqui seria a lógica para salvar no backend
    console.log('Salvando metas:', goalsData)
  }

  // Dados simulados para demonstração
  const weeklyStatus = [
    { day: 'D', date: '15', status: 'good' },
    { day: 'S', date: '16', status: 'good' },
    { day: 'T', date: '17', status: 'good' },
    { day: 'Q', date: '18', status: 'poor' },
    { day: 'Q', date: '19', status: 'good' },
    { day: 'S', date: '20', status: 'good' },
    { day: 'S', date: '21', status: 'excellent' }
  ]

  const dailyStats = [
    { 
      icon: Footprints, 
      label: 'Passos', 
      value: '8,547', 
      target: '10,000', 
      unit: 'passos',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50'
    },
    { 
      icon: Flame, 
      label: 'Calorias Queimadas', 
      value: '1,847', 
      target: '2,200', 
      unit: 'kcal',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    { 
      icon: Droplets, 
      label: 'Água Consumida', 
      value: '1.8', 
      target: '2.5', 
      unit: 'L',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-50'
    }
  ]

  // Dados para a área de progresso
  const progressStats = [
    {
      icon: Footprints,
      label: 'Passos',
      current: 8547,
      target: 10000,
      unit: 'passos',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      streak: 5,
      weeklyData: [7200, 8100, 9500, 6800, 8547, 9200, 10500]
    },
    {
      icon: Flame,
      label: 'Calorias',
      current: 1847,
      target: 2200,
      unit: 'kcal',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      streak: 3,
      weeklyData: [1650, 1890, 2100, 1750, 1847, 2050, 2200]
    },
    {
      icon: Droplets,
      label: 'Água',
      current: 1.8,
      target: 2.5,
      unit: 'L',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-50',
      streak: 7,
      weeklyData: [2.1, 2.3, 2.5, 1.9, 1.8, 2.2, 2.4]
    },
    {
      icon: Target,
      label: 'Proteína',
      current: 85,
      target: 120,
      unit: 'g',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      streak: 2,
      weeklyData: [95, 110, 120, 88, 85, 105, 115]
    }
  ]

  const achievements = [
    {
      icon: Trophy,
      title: 'Meta de Passos',
      description: '7 dias consecutivos atingindo 10k passos',
      date: '2 dias atrás',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Medal,
      title: 'Hidratação Perfeita',
      description: 'Bebeu 2.5L de água por 5 dias seguidos',
      date: '1 semana atrás',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      title: 'Proteína em Dia',
      description: 'Atingiu meta de proteína 10 vezes este mês',
      date: '3 dias atrás',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50'
    }
  ]

  const nutritionBreakdown = {
    calories: { consumed: 1847, target: 2200, color: 'from-orange-400 to-red-500' },
    protein: { consumed: 85, target: 120, color: 'from-purple-400 to-pink-500' },
    carbs: { consumed: 180, target: 250, color: 'from-blue-400 to-cyan-500' },
    fat: { consumed: 65, target: 80, color: 'from-green-400 to-emerald-500' }
  }

  const weeklyProgress = [
    { day: 'Dom', steps: 7200, calories: 1650, water: 2.1, weight: 72.5 },
    { day: 'Seg', steps: 8100, calories: 1890, water: 2.3, weight: 72.3 },
    { day: 'Ter', steps: 9500, calories: 2100, water: 2.5, weight: 72.1 },
    { day: 'Qua', steps: 6800, calories: 1750, water: 1.9, weight: 72.0 },
    { day: 'Qui', steps: 8547, calories: 1847, water: 1.8, weight: 71.8 },
    { day: 'Sex', steps: 9200, calories: 2050, water: 2.2, weight: 71.6 },
    { day: 'Sáb', steps: 10500, calories: 2200, water: 2.4, weight: 71.5 }
  ]

  const recentRecords = [
    {
      type: 'food',
      name: 'Salada Caesar com Frango',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=120&h=120&fit=crop',
      calories: 420,
      carbs: 18,
      protein: 35,
      fat: 22,
      time: '12:30',
      location: 'Restaurante Saudável',
      rating: 4.5
    },
    {
      type: 'activity',
      name: 'Corrida Matinal',
      calories: 450,
      intensity: 'Alta',
      duration: '35 min',
      time: '07:00',
      location: 'Parque Central'
    },
    {
      type: 'food',
      name: 'Smoothie Verde Detox',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=120&h=120&fit=crop',
      calories: 180,
      carbs: 42,
      protein: 4,
      fat: 2,
      time: '09:15',
      location: 'Casa',
      rating: 5.0
    },
    {
      type: 'food',
      name: 'Salmão Grelhado',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=120&h=120&fit=crop',
      calories: 280,
      carbs: 2,
      protein: 28,
      fat: 18,
      time: '19:45',
      location: 'Jantar em Casa',
      rating: 4.8
    }
  ]

  const recommendedFoods = [
    {
      name: 'Abacate Fresco',
      calories: 160,
      carbs: 9,
      protein: 2,
      fat: 15,
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=120&h=120&fit=crop',
      benefits: 'Rico em gorduras boas',
      category: 'Frutas'
    },
    {
      name: 'Salmão Atlântico',
      calories: 206,
      carbs: 0,
      protein: 22,
      fat: 12,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=120&h=120&fit=crop',
      benefits: 'Alto em Ômega-3',
      category: 'Proteínas'
    },
    {
      name: 'Quinoa Orgânica',
      calories: 222,
      carbs: 39,
      protein: 8,
      fat: 4,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&h=120&fit=crop',
      benefits: 'Proteína completa',
      category: 'Grãos'
    },
    {
      name: 'Espinafre Baby',
      calories: 23,
      carbs: 4,
      protein: 3,
      fat: 0,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=120&h=120&fit=crop',
      benefits: 'Rico em ferro',
      category: 'Vegetais'
    }
  ]

  const addMenuOptions = [
    { icon: Search, label: 'Buscar Alimento', action: () => setShowAddMenu(false) },
    { icon: Upload, label: 'Foto do Prato', action: () => setShowPhotoUpload(true) },
    { icon: Zap, label: 'Registrar Atividade', action: () => setShowAddMenu(false) },
    { icon: Droplets, label: 'Adicionar Água', action: () => setShowAddMenu(false) }
  ]

  const renderHome = () => (
    <div className="space-y-6">
      {/* Banner Motivacional Premium */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-8 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Você está incrível!</h3>
              <p className="text-white/90 text-sm">Continue assim e alcance seus sonhos</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-white">7</div>
              <div className="text-white/90 text-xs mt-1">Dias de sequência</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-white">-3kg</div>
              <div className="text-white/90 text-xs mt-1">Este mês</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-white">85%</div>
              <div className="text-white/90 text-xs mt-1">Metas batidas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendário Horizontal com Status */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Esta Semana</h3>
            <p className="text-sm text-gray-500">Setembro 2024</p>
          </div>
          <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          {weeklyStatus.map((day, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <span className="text-xs text-gray-500 font-medium">{day.day}</span>
              <span className="text-lg font-bold text-gray-800">{day.date}</span>
              <div className={`w-4 h-4 rounded-full shadow-lg ${
                day.status === 'excellent' ? 'bg-gradient-to-r from-green-400 to-emerald-500 ring-4 ring-green-100' :
                day.status === 'good' ? 'bg-green-500 ring-2 ring-green-100' : 'bg-red-400'
              }`}>
                {day.status === 'excellent' && (
                  <CheckCircle className="w-4 h-4 text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards de Estatísticas Diárias com Visual Premium */}
      <div className="space-y-4">
        {dailyStats.map((stat, index) => {
          const Icon = stat.icon
          const currentValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''))
          const targetValue = parseFloat(stat.target.replace(/[^0-9.]/g, ''))
          const percentage = (currentValue / targetValue) * 100
          
          return (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{stat.label}</h4>
                    <p className="text-sm text-gray-500">Meta: {stat.target} {stat.unit}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{stat.value}</span>
                  <p className="text-sm text-gray-500">{stat.unit}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-medium">Progresso</span>
                  <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{Math.round(percentage)}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4 shadow-inner">
                  <div 
                    className={`h-4 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-500 ease-out shadow-lg relative overflow-hidden`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Registros Recentes com Design Premium */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Registros Recentes</h3>
            <p className="text-sm text-gray-500">Sua jornada de hoje</p>
          </div>
          <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
            <Star className="w-5 h-5 text-purple-600" />
          </div>
        </div>
        <div className="space-y-4">
          {recentRecords.map((record, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-purple-50/30 rounded-2xl hover:shadow-md transition-all cursor-pointer group">
              {record.type === 'food' ? (
                <>
                  <div className="relative">
                    <img 
                      src={record.image} 
                      alt={record.name}
                      className="w-16 h-16 rounded-xl object-cover shadow-md ring-2 ring-purple-100"
                    />
                    {record.rating && (
                      <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1 shadow-lg">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base">{record.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span className="font-semibold text-orange-600">{record.calories} cal</span>
                      <span>C:{record.carbs}g</span>
                      <span>P:{record.protein}g</span>
                      <span>G:{record.fat}g</span>
                    </div>
                    {record.location && (
                      <div className="flex items-center space-x-1 mt-2">
                        <MapPin className="w-3 h-3 text-purple-400" />
                        <span className="text-xs text-gray-500">{record.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{record.time}</span>
                    </div>
                    {record.rating && (
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600">{record.rating}</span>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base">{record.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span className="font-semibold text-purple-600">{record.calories} cal</span>
                      <span>{record.intensity}</span>
                      <span>{record.duration}</span>
                    </div>
                    {record.location && (
                      <div className="flex items-center space-x-1 mt-2">
                        <MapPin className="w-3 h-3 text-purple-400" />
                        <span className="text-xs text-gray-500">{record.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{record.time}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Campo de Busca Premium */}
      <div className="bg-gradient-to-br from-white to-purple-50/30 rounded-3xl p-6 shadow-lg border border-purple-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
            <Search className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Buscar Alimentos</h3>
        </div>
        <div className="relative">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-purple-400 w-6 h-6" />
          <input
            type="text"
            placeholder="Digite o nome do alimento..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white rounded-2xl border-2 border-purple-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 text-lg shadow-sm"
          />
        </div>
        {searchQuery && (
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <p className="text-sm text-purple-600 font-medium">Buscando por "{searchQuery}"...</p>
          </div>
        )}
      </div>

      {/* Alimentos Recomendados Premium */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Recomendados para Você</h3>
            <p className="text-sm text-gray-500">Selecionados especialmente</p>
          </div>
          <div className="p-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl">
            <Heart className="w-6 h-6 text-red-500" />
          </div>
        </div>
        <div className="space-y-4">
          {recommendedFoods.map((food, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-purple-50/30 rounded-2xl hover:shadow-md transition-all cursor-pointer group">
              <img 
                src={food.image} 
                alt={food.name}
                className="w-16 h-16 rounded-xl object-cover shadow-md ring-2 ring-purple-100"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-bold text-gray-800 text-base">{food.name}</h4>
                  <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full font-medium">
                    {food.category}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-1">
                  <span className="font-semibold text-green-600">{food.calories} cal</span>
                  <span>C:{food.carbs}g</span>
                  <span>P:{food.protein}g</span>
                  <span>G:{food.fat}g</span>
                </div>
                <p className="text-xs text-purple-600 font-medium">{food.benefits}</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Plus className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderProgress = () => (
    <div className="space-y-6">
      {/* Header Premium com Filtro */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Seu Progresso</h3>
            <p className="text-white/90 text-sm">Evolução extraordinária</p>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowPeriodFilter(!showPeriodFilter)}
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/30 transition-colors"
            >
              <Filter className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white capitalize">{progressPeriod === 'week' ? 'Semana' : progressPeriod === 'month' ? 'Mês' : 'Dia'}</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </button>
            
            {showPeriodFilter && (
              <div className="absolute right-0 top-12 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-20 min-w-[120px]">
                {[
                  { key: 'day', label: 'Dia' },
                  { key: 'week', label: 'Semana' },
                  { key: 'month', label: 'Mês' }
                ].map((period) => (
                  <button
                    key={period.key}
                    onClick={() => {
                      setProgressPeriod(period.key)
                      setShowPeriodFilter(false)
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      progressPeriod === period.key ? 'text-purple-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {period.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Resumo Visual Premium */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Evolução Semanal</h4>
            <p className="text-sm text-gray-500">Passos nos últimos 7 dias</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {weeklyProgress.map((day, index) => {
            const percentage = (day.steps / 10000) * 100
            return (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-bold text-purple-600">{day.day}</div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 font-medium">{day.steps.toLocaleString()} passos</span>
                    <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{Math.round(percentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                    <div 
                      className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500 shadow-lg relative overflow-hidden"
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Cartões de Metas Premium */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {progressStats.map((stat, index) => {
          const Icon = stat.icon
          const percentage = (stat.current / stat.target) * 100
          
          return (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{stat.label}</h4>
                  <p className="text-sm text-gray-500">{stat.current} / {stat.target} {stat.unit}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="w-full bg-gray-100 rounded-full h-4 shadow-inner">
                  <div 
                    className={`h-4 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-500 shadow-lg relative overflow-hidden`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{Math.round(percentage)}%</span>
                  <div className="flex items-center space-x-1 text-sm bg-gradient-to-r from-orange-50 to-red-50 px-3 py-1 rounded-full">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="font-semibold text-orange-600">{stat.streak} dias</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Breakdown Nutricional Premium */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg">
            <PieChart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Macronutrientes Hoje</h4>
            <p className="text-sm text-gray-500">Distribuição perfeita</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {Object.entries(nutritionBreakdown).map(([key, data]) => {
            const percentage = (data.consumed / data.target) * 100
            const labels = {
              calories: 'Calorias',
              protein: 'Proteína',
              carbs: 'Carboidratos',
              fat: 'Gordura'
            }
            const units = {
              calories: 'kcal',
              protein: 'g',
              carbs: 'g',
              fat: 'g'
            }
            
            return (
              <div key={key} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">{labels[key]}</span>
                  <span className="text-sm text-gray-600 font-medium">{data.consumed} / {data.target} {units[key]}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${data.color} transition-all duration-500 shadow-lg relative overflow-hidden`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Conquistas Premium */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Conquistas Recentes</h4>
            <p className="text-sm text-gray-500">Você é uma estrela</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-purple-50/30 rounded-2xl hover:shadow-md transition-all cursor-pointer group">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${achievement.color} shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-800">{achievement.title}</h5>
                  <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                  <p className="text-xs text-purple-600 font-medium mt-2">{achievement.date}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Evolução do Peso Premium */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Evolução do Peso</h4>
            <p className="text-sm text-gray-500">Progresso incrível</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div>
              <span className="text-2xl font-bold text-green-600">-1.0 kg</span>
              <p className="text-sm text-gray-600">Esta semana</p>
            </div>
            <div className="text-right">
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">71.5 kg</span>
              <p className="text-sm text-gray-500">Peso atual</p>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {weeklyProgress.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-500 mb-1">{day.day}</div>
                <div className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{day.weight}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resumo de Hábitos Premium */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Resumo de Hábitos</h4>
            <p className="text-sm text-gray-500">Últimos 30 dias</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
            <div className="text-2xl font-bold text-blue-600">23/30</div>
            <div className="text-sm text-gray-600">Dias com registro</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div className="text-2xl font-bold text-green-600">18/30</div>
            <div className="text-sm text-gray-600">Metas atingidas</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <div className="text-2xl font-bold text-purple-600">7</div>
            <div className="text-sm text-gray-600">Sequência atual</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
            <div className="text-2xl font-bold text-orange-600">15</div>
            <div className="text-sm text-gray-600">Melhor sequência</div>
          </div>
        </div>
      </div>
    </div>
  )

  // Renderizar tela de Perfil
  const renderProfile = () => (
    <div className="space-y-6">
      {/* Header com botão voltar */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setSettingsView('main')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors"
          >
            {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
            <span className="text-sm font-medium">{isEditing ? 'Salvar' : 'Editar'}</span>
          </button>
        </div>
        <h3 className="text-2xl font-bold text-gray-800">Meu Perfil</h3>
        <p className="text-sm text-gray-500">Dados pessoais e objetivos</p>
      </div>

      {/* Foto do perfil */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-800">{profileData.name}</h4>
            <p className="text-gray-500">{profileData.email}</p>
            {isEditing && (
              <button className="text-sm text-blue-600 hover:text-blue-700 mt-2">
                Alterar foto
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Dados pessoais */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <h4 className="text-lg font-bold text-gray-800 mb-6">Dados Pessoais</h4>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-xl text-gray-800">{profileData.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-xl text-gray-800">{profileData.email}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
              {isEditing ? (
                <input
                  type="number"
                  value={profileData.age}
                  onChange={(e) => setProfileData({...profileData, age: parseInt(e.target.value)})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-xl text-gray-800">{profileData.age} anos</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Altura</label>
              {isEditing ? (
                <input
                  type="number"
                  value={profileData.height}
                  onChange={(e) => setProfileData({...profileData, height: parseInt(e.target.value)})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-xl text-gray-800">{profileData.height} cm</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Peso Atual</label>
              {isEditing ? (
                <input
                  type="number"
                  step="0.1"
                  value={profileData.weight}
                  onChange={(e) => setProfileData({...profileData, weight: parseFloat(e.target.value)})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-xl text-gray-800">{profileData.weight} kg</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Objetivos */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <h4 className="text-lg font-bold text-gray-800 mb-6">Objetivos</h4>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nível de Atividade</label>
              {isEditing ? (
                <select
                  value={profileData.activityLevel}
                  onChange={(e) => setProfileData({...profileData, activityLevel: e.target.value})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                >
                  <option value="Sedentário">Sedentário</option>
                  <option value="Leve">Leve</option>
                  <option value="Moderado">Moderado</option>
                  <option value="Intenso">Intenso</option>
                  <option value="Muito Intenso">Muito Intenso</option>
                </select>
              ) : (
                <p className="p-3 bg-gray-50 rounded-xl text-gray-800">{profileData.activityLevel}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Objetivo Principal</label>
              {isEditing ? (
                <select
                  value={profileData.goal}
                  onChange={(e) => setProfileData({...profileData, goal: e.target.value})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                >
                  <option value="Perder peso">Perder peso</option>
                  <option value="Manter peso">Manter peso</option>
                  <option value="Ganhar peso">Ganhar peso</option>
                  <option value="Ganhar massa muscular">Ganhar massa muscular</option>
                </select>
              ) : (
                <p className="p-3 bg-gray-50 rounded-xl text-gray-800">{profileData.goal}</p>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Peso Meta</label>
            {isEditing ? (
              <input
                type="number"
                step="0.1"
                value={profileData.targetWeight}
                onChange={(e) => setProfileData({...profileData, targetWeight: parseFloat(e.target.value)})}
                className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            ) : (
              <p className="p-3 bg-gray-50 rounded-xl text-gray-800">{profileData.targetWeight} kg</p>
            )}
          </div>
        </div>
        
        {isEditing && (
          <div className="flex space-x-3 mt-6">
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={saveProfileData}
              className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              Salvar Alterações
            </button>
          </div>
        )}
      </div>
    </div>
  )

  // Renderizar tela de Metas
  const renderGoals = () => (
    <div className="space-y-6">
      {/* Header com botão voltar */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setSettingsView('main')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors"
          >
            {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
            <span className="text-sm font-medium">{isEditing ? 'Salvar' : 'Editar'}</span>
          </button>
        </div>
        <h3 className="text-2xl font-bold text-gray-800">Minhas Metas</h3>
        <p className="text-sm text-gray-500">Configure seus objetivos diários</p>
      </div>

      {/* Metas Nutricionais */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">Metas Nutricionais</h4>
            <p className="text-sm text-gray-500">Objetivos diários de alimentação</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Calorias Diárias</label>
              {isEditing ? (
                <input
                  type="number"
                  value={goalsData.dailyCalories}
                  onChange={(e) => setGoalsData({...goalsData, dailyCalories: parseInt(e.target.value)})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl font-bold text-orange-600">{goalsData.dailyCalories}</span>
                  <span className="text-gray-600 ml-2">kcal</span>
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Proteína Diária</label>
              {isEditing ? (
                <input
                  type="number"
                  value={goalsData.dailyProtein}
                  onChange={(e) => setGoalsData({...goalsData, dailyProtein: parseInt(e.target.value)})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl font-bold text-purple-600">{goalsData.dailyProtein}</span>
                  <span className="text-gray-600 ml-2">g</span>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Água Diária</label>
            {isEditing ? (
              <input
                type="number"
                step="0.1"
                value={goalsData.dailyWater}
                onChange={(e) => setGoalsData({...goalsData, dailyWater: parseFloat(e.target.value)})}
                className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            ) : (
              <div className="p-3 bg-gray-50 rounded-xl">
                <span className="text-2xl font-bold text-cyan-600">{goalsData.dailyWater}</span>
                <span className="text-gray-600 ml-2">L</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Metas de Atividade */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl">
            <Footprints className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">Metas de Atividade</h4>
            <p className="text-sm text-gray-500">Objetivos de movimento e exercício</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Passos Diários</label>
              {isEditing ? (
                <input
                  type="number"
                  value={goalsData.dailySteps}
                  onChange={(e) => setGoalsData({...goalsData, dailySteps: parseInt(e.target.value)})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl font-bold text-emerald-600">{goalsData.dailySteps.toLocaleString()}</span>
                  <span className="text-gray-600 ml-2">passos</span>
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Treinos por Semana</label>
              {isEditing ? (
                <input
                  type="number"
                  value={goalsData.weeklyWorkouts}
                  onChange={(e) => setGoalsData({...goalsData, weeklyWorkouts: parseInt(e.target.value)})}
                  className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl font-bold text-purple-600">{goalsData.weeklyWorkouts}</span>
                  <span className="text-gray-600 ml-2">treinos</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Meta de Sono */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">Meta de Sono</h4>
            <p className="text-sm text-gray-500">Horas de descanso por noite</p>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Horas de Sono</label>
          {isEditing ? (
            <input
              type="number"
              value={goalsData.sleepHours}
              onChange={(e) => setGoalsData({...goalsData, sleepHours: parseInt(e.target.value)})}
              className="w-full p-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          ) : (
            <div className="p-3 bg-gray-50 rounded-xl">
              <span className="text-2xl font-bold text-indigo-600">{goalsData.sleepHours}</span>
              <span className="text-gray-600 ml-2">horas</span>
            </div>
          )}
        </div>
      </div>

      {/* Progresso das Metas */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <h4 className="text-lg font-bold text-gray-800 mb-6">Progresso Atual</h4>
        <div className="space-y-4">
          {[
            { label: 'Calorias', current: 1847, target: goalsData.dailyCalories, color: 'from-orange-500 to-red-500' },
            { label: 'Passos', current: 8547, target: goalsData.dailySteps, color: 'from-emerald-500 to-teal-600' },
            { label: 'Água', current: 1.8, target: goalsData.dailyWater, color: 'from-cyan-400 to-blue-500' },
            { label: 'Proteína', current: 85, target: goalsData.dailyProtein, color: 'from-purple-500 to-pink-500' }
          ].map((item, index) => {
            const percentage = (item.current / item.target) * 100
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{item.label}</span>
                  <span className="text-sm text-gray-600">{item.current} / {item.target}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {isEditing && (
        <div className="flex space-x-3">
          <button
            onClick={() => setIsEditing(false)}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={saveGoalsData}
            className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
          >
            Salvar Metas
          </button>
        </div>
      )}
    </div>
  )

  // Renderizar tela de Preferências
  const renderPreferences = () => (
    <div className="space-y-6">
      {/* Header com botão voltar */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setSettingsView('main')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>
        </div>
        <h3 className="text-2xl font-bold text-gray-800">Preferências</h3>
        <p className="text-sm text-gray-500">Configurações do aplicativo</p>
      </div>

      {/* Notificações */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">Notificações</h4>
            <p className="text-sm text-gray-500">Gerencie seus lembretes</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { key: 'meals', label: 'Lembretes de Refeições', description: 'Receba notificações para registrar suas refeições' },
            { key: 'water', label: 'Lembretes de Hidratação', description: 'Seja lembrado de beber água regularmente' },
            { key: 'exercise', label: 'Lembretes de Exercício', description: 'Notificações para manter-se ativo' },
            { key: 'sleep', label: 'Lembretes de Sono', description: 'Alertas para manter uma rotina de sono saudável' }
          ].map((notification) => (
            <div key={notification.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex-1">
                <h5 className="font-semibold text-gray-800">{notification.label}</h5>
                <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
              </div>
              <button
                onClick={() => setPreferencesData({
                  ...preferencesData,
                  notifications: {
                    ...preferencesData.notifications,
                    [notification.key]: !preferencesData.notifications[notification.key]
                  }
                })}
                className={`w-12 h-6 rounded-full transition-colors ${
                  preferencesData.notifications[notification.key] 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                  preferencesData.notifications[notification.key] 
                    ? 'translate-x-6' 
                    : 'translate-x-0.5'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Privacidade */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">Privacidade</h4>
            <p className="text-sm text-gray-500">Controle seus dados pessoais</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { key: 'shareProgress', label: 'Compartilhar Progresso', description: 'Permitir que amigos vejam seu progresso' },
            { key: 'publicProfile', label: 'Perfil Público', description: 'Tornar seu perfil visível para outros usuários' },
            { key: 'dataCollection', label: 'Coleta de Dados', description: 'Permitir coleta de dados para melhorar o app' }
          ].map((privacy) => (
            <div key={privacy.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex-1">
                <h5 className="font-semibold text-gray-800">{privacy.label}</h5>
                <p className="text-sm text-gray-600 mt-1">{privacy.description}</p>
              </div>
              <button
                onClick={() => setPreferencesData({
                  ...preferencesData,
                  privacy: {
                    ...preferencesData.privacy,
                    [privacy.key]: !preferencesData.privacy[privacy.key]
                  }
                })}
                className={`w-12 h-6 rounded-full transition-colors ${
                  preferencesData.privacy[privacy.key] 
                    ? 'bg-green-500' 
                    : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                  preferencesData.privacy[privacy.key] 
                    ? 'translate-x-6' 
                    : 'translate-x-0.5'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Idioma */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">Idioma</h4>
            <p className="text-sm text-gray-500">Escolha seu idioma preferido</p>
          </div>
        </div>
        
        <select
          value={preferencesData.language}
          onChange={(e) => setPreferencesData({...preferencesData, language: e.target.value})}
          className="w-full p-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
        >
          <option value="Português">Português</option>
          <option value="English">English</option>
          <option value="Español">Español</option>
          <option value="Français">Français</option>
        </select>
      </div>

      {/* Tema */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">Tema</h4>
            <p className="text-sm text-gray-500">Personalize a aparência do app</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {['Claro', 'Escuro'].map((theme) => (
            <button
              key={theme}
              onClick={() => setPreferencesData({...preferencesData, theme})}
              className={`p-4 rounded-2xl border-2 transition-all ${
                preferencesData.theme === theme
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="text-center">
                <div className={`w-8 h-8 mx-auto mb-2 rounded-full ${
                  theme === 'Claro' ? 'bg-yellow-400' : 'bg-gray-800'
                }`} />
                <span className="font-medium text-gray-800">{theme}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Botões de ação */}
      <div className="space-y-3">
        <button className="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-semibold hover:bg-red-100 transition-colors">
          Limpar Cache do App
        </button>
        <button className="w-full bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors">
          Exportar Dados
        </button>
        <button className="w-full bg-red-500 text-white py-4 rounded-2xl font-semibold hover:bg-red-600 transition-colors">
          Excluir Conta
        </button>
      </div>
    </div>
  )

  const renderSettings = () => {
    if (settingsView === 'profile') return renderProfile()
    if (settingsView === 'goals') return renderGoals()
    if (settingsView === 'preferences') return renderPreferences()
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Configurações</h3>
          <div className="space-y-4">
            <button
              onClick={() => setSettingsView('profile')}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors w-full"
            >
              <User className="w-6 h-6 text-gray-600" />
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800">Perfil</h4>
                <p className="text-sm text-gray-500">Dados pessoais e objetivos</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button
              onClick={() => setSettingsView('goals')}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors w-full"
            >
              <Target className="w-6 h-6 text-gray-600" />
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800">Metas</h4>
                <p className="text-sm text-gray-500">Definir objetivos diários</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button
              onClick={() => setSettingsView('preferences')}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors w-full"
            >
              <Settings className="w-6 h-6 text-gray-600" />
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800">Preferências</h4>
                <p className="text-sm text-gray-500">Notificações e privacidade</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderPhotoUpload = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm max-h-[90vh] overflow-y-auto">
        {!analysisResult ? (
          <>
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              {isAnalyzing ? 'Analisando Alimento...' : 'Reconhecimento Nutricional'}
            </h3>
            
            {isAnalyzing ? (
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Nossa IA está identificando os alimentos na sua foto...</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Tire uma foto do seu prato para análise nutricional</p>
                  <button 
                    onClick={handleCameraCapture}
                    className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Abrir Câmera
                  </button>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <h4 className="font-semibold text-gray-800 mb-2">Como funciona:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• IA analisa os alimentos na foto</li>
                    <li>• Calcula calorias e macronutrientes</li>
                    <li>• Adiciona automaticamente ao seu diário</li>
                  </ul>
                </div>
              </div>
            )}
            
            {!isAnalyzing && (
              <div className="flex space-x-3 mt-6">
                <button 
                  onClick={() => {
                    setShowPhotoUpload(false)
                    setAnalysisResult(null)
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Alimentos Identificados</h3>
            
            <div className="space-y-4">
              {analysisResult.map((food, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-800">{food.food}</h4>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">
                      {food.confidence}% confiança
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div className="text-center p-2 bg-white rounded-xl">
                      <div className="font-bold text-orange-600">{food.calories}</div>
                      <div className="text-gray-500">kcal</div>
                    </div>
                    <div className="text-center p-2 bg-white rounded-xl">
                      <div className="font-bold text-purple-600">{food.protein}g</div>
                      <div className="text-gray-500">Proteína</div>
                    </div>
                    <div className="text-center p-2 bg-white rounded-xl">
                      <div className="font-bold text-blue-600">{food.carbs}g</div>
                      <div className="text-gray-500">Carboidratos</div>
                    </div>
                    <div className="text-center p-2 bg-white rounded-xl">
                      <div className="font-bold text-green-600">{food.fat}g</div>
                      <div className="text-gray-500">Gordura</div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-3">Porção: {food.portion}</p>
                  
                  <button
                    onClick={() => addToDaily(food)}
                    className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Adicionar ao Diário
                  </button>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button 
                onClick={() => {
                  setShowPhotoUpload(false)
                  setAnalysisResult(null)
                }}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Fechar
              </button>
              <button 
                onClick={handleCameraCapture}
                className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
              >
                Nova Foto
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/20 to-pink-50/20">
      {/* Input oculto para captura de câmera */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleImageCapture}
        className="hidden"
      />

      {/* Header Premium */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-xl sticky top-0 z-10">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">NutriApp</h1>
              <p className="text-white/90 text-sm">Transforme sua vida</p>
            </div>
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ring-2 ring-white/30">
              <Crown className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 pb-32">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'progress' && renderProgress()}
        {activeTab === 'settings' && renderSettings()}
      </div>

      {/* Menu de Adição */}
      {showAddMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-40">
          <div className="bg-white rounded-t-3xl p-6 w-full max-w-md">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Adicionar</h3>
            <div className="space-y-3">
              {addMenuOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <button
                    key={index}
                    onClick={option.action}
                    className="w-full flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-800">{option.label}</span>
                  </button>
                )
              })}
            </div>
            <button 
              onClick={() => setShowAddMenu(false)}
              className="w-full mt-6 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Upload de Foto */}
      {showPhotoUpload && renderPhotoUpload()}

      {/* Bottom Navigation Premium */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 px-6 py-4 z-30 shadow-2xl">
        <div className="flex items-center justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center space-y-1 p-3 rounded-2xl transition-all ${
              activeTab === 'home' ? 'text-purple-600 bg-gradient-to-br from-purple-50 to-pink-50' : 'text-gray-600'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-semibold">Início</span>
          </button>
          
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex flex-col items-center space-y-1 p-3 rounded-2xl transition-all ${
              activeTab === 'progress' ? 'text-purple-600 bg-gradient-to-br from-purple-50 to-pink-50' : 'text-gray-600'
            }`}
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs font-semibold">Progresso</span>
          </button>
          
          <button
            onClick={() => {
              setActiveTab('settings')
              setSettingsView('main')
            }}
            className={`flex flex-col items-center space-y-1 p-3 rounded-2xl transition-all ${
              activeTab === 'settings' ? 'text-purple-600 bg-gradient-to-br from-purple-50 to-pink-50' : 'text-gray-600'
            }`}
          >
            <Settings className="w-6 h-6" />
            <span className="text-xs font-semibold">Configurações</span>
          </button>
        </div>
      </div>

      {/* Floating Action Button Premium */}
      <button 
        onClick={handleCameraCapture}
        className="fixed bottom-24 right-6 w-16 h-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all hover:scale-110 z-30 ring-4 ring-white/50"
      >
        <Camera className="w-7 h-7 text-white" />
      </button>
    </div>
  )
}