import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [donationAmount, setDonationAmount] = useState('2');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Имитация отправки
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Спасибо за поддержку! 💜');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-donat-red via-donat-blue to-donat-teal">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 font-['Montserrat']">
            Поддержите проект
          </h1>
          <p className="text-xl mb-8 opacity-90 font-['Open_Sans']">
            Каждый рубль важен для развития нашего проекта
          </p>
          <div className="flex justify-center space-x-8 text-5xl animate-pulse-slow">
            <Icon name="Heart" size={48} className="text-red-300" />
            <Icon name="Sparkles" size={48} className="text-yellow-300" />
            <Icon name="Gift" size={48} className="text-purple-300" />
          </div>
        </div>

        {/* Donation Form */}
        <div className="max-w-md mx-auto">
          <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white font-['Montserrat']">
                Сделать донат
              </CardTitle>
              <CardDescription className="text-white/80 font-['Open_Sans']">
                Оставьте сообщение вместе с поддержкой
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-white font-['Open_Sans']">
                    Сумма доната (руб.)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    min="1"
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-white/50"
                    placeholder="Введите сумму"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-['Open_Sans']">
                    Сообщение (необязательно)
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-white/50 resize-none"
                    placeholder="Оставьте своё сообщение..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-donat-green to-donat-teal hover:scale-105 transition-all duration-300 text-white font-bold py-3 font-['Open_Sans'] shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Отправка...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Heart" size={20} />
                      <span>Поддержать проект</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <Icon name="Zap" size={40} className="text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat']">
                Быстро
              </h3>
              <p className="text-white/80 font-['Open_Sans']">
                Мгновенная обработка вашего доната
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <Icon name="Shield" size={40} className="text-green-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat']">
                Безопасно
              </h3>
              <p className="text-white/80 font-['Open_Sans']">
                Защищённые платежи через надёжные системы
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <Icon name="MessageCircle" size={40} className="text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat']">
                С сообщением
              </h3>
              <p className="text-white/80 font-['Open_Sans']">
                Оставьте своё послание вместе с донатом
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center text-white animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2 font-['Montserrat']">1,234</div>
              <div className="text-white/80 font-['Open_Sans']">Донатеров</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 font-['Montserrat']">₽45,678</div>
              <div className="text-white/80 font-['Open_Sans']">Собрано</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 font-['Montserrat']">2 мин</div>
              <div className="text-white/80 font-['Open_Sans']">Среднее время</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 font-['Montserrat']">99.9%</div>
              <div className="text-white/80 font-['Open_Sans']">Успешных донатов</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;