import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-red-500">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg"></div>
            <h1 className="text-xl font-bold text-gray-900">Ванный Акрилыс</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#prices" className="text-gray-700 hover:text-blue-600 transition-colors">Цены</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              🛁 Профессиональная реставрация
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Реставрация ванн 
              <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent"> акрилом</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Превратим вашу старую ванну в новую за один день. 
              <br />Гарантия качества 5 лет. Бесплатный замер.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Бесплатный замер
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по реставрации ванн с использованием современных технологий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Bath",
                title: "Реставрация акрилом",
                description: "Покрытие ванны жидким акрилом. Как новая ванна за день.",
                price: "от 8 990 ₽"
              },
              {
                icon: "Droplet", 
                title: "Эмалировка",
                description: "Восстановление эмалевого покрытия. Классический метод.",
                price: "от 6 990 ₽"
              },
              {
                icon: "Wrench",
                title: "Ремонт сколов",
                description: "Устранение сколов и трещин любой сложности.",
                price: "от 2 990 ₽"
              },
              {
                icon: "Sparkles",
                title: "Полировка",
                description: "Возвращение блеска и гладкости поверхности.",
                price: "от 3 990 ₽"
              },
              {
                icon: "Shield",
                title: "Антискользящее покрытие", 
                description: "Безопасность в ванной комнате для всей семьи.",
                price: "от 4 990 ₽"
              },
              {
                icon: "Palette",
                title: "Смена цвета",
                description: "Изменение цвета ванны. Широкая палитра оттенков.",
                price: "от 9 990 ₽"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Результат наших работ</h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/img/d23ef309-15ca-4f74-89a0-74a472c4ae05.jpg" 
                alt="Реставрированная ванна" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Прозрачные цены</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Никаких скрытых доплат. Цена фиксируется после бесплатного замера
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Базовый",
                price: "6 990",
                description: "Эмалировка стандартной ванны",
                features: [
                  "Подготовка поверхности",
                  "Эмалевое покрытие",
                  "Гарантия 2 года",
                  "Работа 1 день"
                ],
                popular: false
              },
              {
                name: "Премиум",
                price: "8 990", 
                description: "Акриловое покрытие",
                features: [
                  "Профессиональная подготовка",
                  "Жидкий акрил премиум",
                  "Гарантия 5 лет",
                  "Работа 1 день",
                  "Антибактериальное покрытие"
                ],
                popular: true
              },
              {
                name: "Люкс",
                price: "12 990",
                description: "Полная реставрация + бонусы",
                features: [
                  "Все из пакета Премиум",
                  "Устранение сколов",
                  "Полировка до блеска", 
                  "Антискользящее покрытие",
                  "Гарантия 7 лет"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} bg-white hover:shadow-2xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    🔥 Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  <div className="text-4xl font-bold text-blue-600 mt-4">
                    {plan.price} <span className="text-lg text-gray-500">₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Бесплатный замер</h2>
              <p className="text-xl text-gray-600">
                Оставьте заявку и мы приедем в удобное время для оценки работ
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Заявка на замер</CardTitle>
                    <CardDescription className="text-center">
                      Заполните форму и мы свяжемся с вами в течение 15 минут
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input 
                        placeholder="Номер телефона" 
                        type="tel"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input 
                        placeholder="Адрес" 
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Опишите состояние ванны (необязательно)" 
                        className="min-h-24"
                      />
                    </div>
                    <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Почему выбирают нас?</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "Clock",
                        title: "Быстро",
                        description: "Работа выполняется за 1 день"
                      },
                      {
                        icon: "Shield",
                        title: "Надежно", 
                        description: "Гарантия до 7 лет на все работы"
                      },
                      {
                        icon: "Star",
                        title: "Качественно",
                        description: "Используем только премиум материалы"
                      },
                      {
                        icon: "HeartHandshake",
                        title: "Честно",
                        description: "Цена не изменится после замера"
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={benefit.icon} size={24} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg"></div>
                <h3 className="text-xl font-bold">Ванный Акрилыс</h3>
              </div>
              <p className="text-gray-400">
                Профессиональная реставрация ванн в Москве и области
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Реставрация акрилом</li>
                <li>Эмалировка ванн</li>
                <li>Ремонт сколов</li>
                <li>Полировка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@vannyj-akryl.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Примерная, 1
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-400">
                <div>Пн-Вс: 8:00 - 22:00</div>
                <div>Без выходных</div>
                <div className="text-green-400 font-semibold">Бесплатные консультации</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ванный Акрилыс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;