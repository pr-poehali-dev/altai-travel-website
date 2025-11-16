import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все фото" },
    { id: "mountains", name: "Горы" },
    { id: "lakes", name: "Озера" },
    { id: "camp", name: "Лагерь" },
    { id: "people", name: "Люди" }
  ];

  const photos = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/projects/ba715110-bd5b-4f20-a284-72024fe42002/files/51c0a467-712c-48a8-afaa-8318cc6dac49.jpg",
      category: "mountains",
      title: "Гора Белуха на рассвете",
      location: "Алтай"
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/projects/ba715110-bd5b-4f20-a284-72024fe42002/files/c5ee87a5-ee35-4534-b372-9f21debbb8b2.jpg",
      category: "lakes",
      title: "Телецкое озеро",
      location: "Алтай"
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/projects/ba715110-bd5b-4f20-a284-72024fe42002/files/b5a499f1-b529-49c9-812e-a4448c15dd0a.jpg",
      category: "mountains",
      title: "Каменные грибы",
      location: "Алтай"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800",
      category: "camp",
      title: "Вечер у костра",
      location: "Базовый лагерь"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
      category: "mountains",
      title: "Горные вершины",
      location: "Перевал Кара-Тюрек"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      category: "lakes",
      title: "Горное озеро",
      location: "Долина семи озер"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
      category: "camp",
      title: "Палаточный лагерь",
      location: "У подножия Белухи"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
      category: "people",
      title: "На вершине",
      location: "Покорение перевала"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      category: "mountains",
      title: "Альпийские луга",
      location: "Высокогорье"
    }
  ];

  const filteredPhotos = selectedCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Icon name="Mountain" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">АлтайТур</span>
            </button>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground transition-colors">
                Главная
              </button>
              <button onClick={() => navigate("/gallery")} className="text-foreground font-medium">
                Галерея
              </button>
              <Button variant="default" onClick={() => navigate("/booking")}>
                Забронировать
              </Button>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Фотографии с наших туров — величественные горы, чистейшие озера и незабываемые моменты
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map(photo => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">{photo.title}</h3>
                    <p className="text-sm text-white/80 flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {photo.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Фотографии не найдены</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Mountain" size={28} className="text-primary" />
                <span className="text-xl font-bold">АлтайТур</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Незабываемые походы по самым красивым местам Алтая
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+7 (923) 456-78-90</p>
                <p>info@altaitour.ru</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Навигация</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => navigate("/")} className="block text-muted-foreground hover:text-foreground transition-colors">
                  Главная
                </button>
                <button onClick={() => navigate("/gallery")} className="block text-muted-foreground hover:text-foreground transition-colors">
                  Галерея
                </button>
                <button onClick={() => navigate("/booking")} className="block text-muted-foreground hover:text-foreground transition-colors">
                  Бронирование
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Соцсети</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 АлтайТур. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;