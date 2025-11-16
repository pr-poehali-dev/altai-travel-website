import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    route: "",
    date: "",
    people: "1"
  });

  const routes = [
    { id: "belukha", name: "Тур к подножию Белухи", price: "45 000 ₽", duration: "7 дней" },
    { id: "passes", name: "Алтайские перевалы", price: "32 000 ₽", duration: "5 дней" },
    { id: "teletskoye", name: "Вокруг Телецкого озера", price: "18 000 ₽", duration: "3 дня" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const selectedRoute = routes.find(r => r.id === formData.route);

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-primary flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Icon name="Mountain" size={28} />
            Алтай Тур
          </button>
          <Button variant="outline" onClick={() => navigate("/")}>
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Назад
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Забронировать тур
            </h1>
            <p className="text-muted-foreground text-lg">
              Заполните форму, и мы свяжемся с вами для подтверждения бронирования
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 animate-slide-up">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Icon name="FileText" size={24} className="text-primary" />
                Данные для бронирования
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Ваше имя *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.ru"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="route" className="text-foreground">
                    Выберите маршрут *
                  </Label>
                  <select
                    id="route"
                    name="route"
                    required
                    value={formData.route}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Выберите маршрут</option>
                    {routes.map(route => (
                      <option key={route.id} value={route.id}>
                        {route.name} - {route.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="date" className="text-foreground">
                    Желаемая дата начала *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-2"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <Label htmlFor="people" className="text-foreground">
                    Количество человек *
                  </Label>
                  <Input
                    id="people"
                    name="people"
                    type="number"
                    required
                    min="1"
                    max="20"
                    value={formData.people}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg"
                  size="lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Info" size={20} className="text-accent" />
                  Информация о бронировании
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <p>Бронирование подтверждается в течение 24 часов</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <p>Предоплата составляет 30% от стоимости тура</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <p>Бесплатная отмена за 14 дней до начала тура</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <p>В стоимость включено: проживание, питание, гид, трансфер</p>
                  </div>
                </div>
              </Card>

              {selectedRoute && (
                <Card className="p-8 bg-accent/5 border-2 border-accent/20 animate-fade-in">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Выбранный маршрут
                  </h3>
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-foreground">
                      {selectedRoute.name}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>{selectedRoute.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{formData.people} {parseInt(formData.people) === 1 ? 'человек' : 'человека'}</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Стоимость за человека:</span>
                        <span className="text-2xl font-bold text-primary">
                          {selectedRoute.price}
                        </span>
                      </div>
                      {parseInt(formData.people) > 1 && (
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-muted-foreground">Итого:</span>
                          <span className="text-xl font-bold text-foreground">
                            {parseInt(selectedRoute.price.replace(/\D/g, '')) * parseInt(formData.people)} ₽
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              )}

              <Card className="p-8 bg-primary text-primary-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Есть вопросы?
                </h3>
                <p className="mb-4 text-primary-foreground/90">
                  Свяжитесь с нами напрямую, и мы поможем подобрать идеальный маршрут
                </p>
                <div className="space-y-3 text-primary-foreground/90">
                  <p className="flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    +7 (999) 123-45-67
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    info@altaitour.ru
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    Ежедневно с 9:00 до 21:00
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
