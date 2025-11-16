import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const attractions = [
    {
      title: "Гора Белуха",
      description: "Высочайшая вершина Алтая (4509 м), священное место для местных жителей",
      image: "https://cdn.poehali.dev/projects/ba715110-bd5b-4f20-a284-72024fe42002/files/51c0a467-712c-48a8-afaa-8318cc6dac49.jpg",
      difficulty: "Сложный"
    },
    {
      title: "Каменные грибы",
      description: "Удивительные скальные образования, созданные природой за тысячи лет",
      image: "https://cdn.poehali.dev/projects/ba715110-bd5b-4f20-a284-72024fe42002/files/b5a499f1-b529-49c9-812e-a4448c15dd0a.jpg",
      difficulty: "Средний"
    },
    {
      title: "Телецкое озеро",
      description: "Одно из глубочайших озер России с кристально чистой водой",
      image: "https://cdn.poehali.dev/projects/ba715110-bd5b-4f20-a284-72024fe42002/files/c5ee87a5-ee35-4534-b372-9f21debbb8b2.jpg",
      difficulty: "Легкий"
    }
  ];

  const routes = [
    {
      name: "Тур к подножию Белухи",
      duration: "7 дней",
      distance: "120 км",
      price: "от 45 000 ₽",
      highlights: ["Озеро Аккем", "Водопад Текелю", "Долина семи озер"]
    },
    {
      name: "Алтайские перевалы",
      duration: "5 дней",
      distance: "85 км",
      price: "от 32 000 ₽",
      highlights: ["Перевал Кара-Тюрек", "Горные реки", "Альпийские луга"]
    },
    {
      name: "Вокруг Телецкого озера",
      duration: "3 дня",
      distance: "45 км",
      price: "от 18 000 ₽",
      highlights: ["Водопады", "Кедровая тайга", "Рыбалка"]
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Mountain" size={28} />
            Алтай Тур
          </h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection("attractions")} className="text-foreground hover:text-primary transition-colors">
              Достопримечательности
            </button>
            <button onClick={() => scrollToSection("routes")} className="text-foreground hover:text-primary transition-colors">
              Маршруты
            </button>
            <button onClick={() => navigate("/gallery")} className="text-foreground hover:text-primary transition-colors">
              Галерея
            </button>
          </div>
          <Button variant="default" className="hidden md:flex" onClick={() => navigate("/booking")}>
            Забронировать
          </Button>
        </div>
      </nav>

      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/ba715110-bd5b-4f20-a284-72024fe42002/files/51c0a467-712c-48a8-afaa-8318cc6dac49.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Открой для себя Алтай
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Величественные горы, кристальные озера и незабываемые приключения ждут вас
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-xl"
              onClick={() => scrollToSection("routes")}
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              Выбрать маршрут
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 shadow-xl"
              onClick={() => scrollToSection("attractions")}
            >
              Узнать больше
            </Button>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection("attractions")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <Icon name="ChevronDown" size={40} />
        </button>
      </section>

      <section id="attractions" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Достопримечательности
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Природные чудеса Алтая, которые стоит увидеть своими глазами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    {attraction.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {attraction.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {attraction.description}
                  </p>
                  <Button variant="outline" className="w-full group">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Готовые маршруты
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите идеальный маршрут для вашего приключения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon name="Map" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {route.name}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="Route" size={18} />
                    <span>{route.distance}</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary font-semibold text-lg">
                    <Icon name="Tag" size={18} />
                    <span>{route.price}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Star" size={16} className="text-accent" />
                    Основные точки:
                  </h4>
                  <ul className="space-y-2">
                    {route.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg" onClick={() => navigate("/booking")}>
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Забронировать тур
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Mountain" size={24} />
                Алтай Тур
              </h3>
              <p className="text-primary-foreground/80">
                Незабываемые путешествия по самым красивым местам Алтайских гор
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@altaitour.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 Алтай Тур. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;