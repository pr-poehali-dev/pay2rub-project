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

  const cardNumber = '2200 2460 2108 2220';
  
  const generateSberUrl = () => {
    const baseUrl = 'https://online.sberbank.ru/CSAFront/index.do#/transfer/card';
    const params = new URLSearchParams({
      cardNumber: cardNumber.replace(/\s/g, ''),
      amount: donationAmount,
      purpose: message || 'Поддержка проекта'
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const generateTinkoffUrl = () => {
    const baseUrl = 'https://www.tinkoff.ru/mybank/payment/card-to-card/';
    const params = new URLSearchParams({
      cardNumber: cardNumber.replace(/\s/g, ''),
      amount: donationAmount,
      comment: message || 'Поддержка проекта'
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const generateYooMoneyUrl = () => {
    // ЮMoney не поддерживает прямой перевод на карту через ссылку
    // Открываем страницу переводов на карту
    const baseUrl = 'https://yoomoney.ru/transfer/card';
    return baseUrl;
  };

  const handlePaymentClick = (provider: 'yoomoney' | 'sber' | 'tinkoff') => {
    let url = '';
    switch (provider) {
      case 'yoomoney':
        url = generateYooMoneyUrl();
        break;
      case 'sber':
        url = generateSberUrl();
        break;
      case 'tinkoff':
        url = generateTinkoffUrl();
        break;
    }
    window.open(url, '_blank');
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
              <div className="space-y-6">
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

                {/* Card Info */}
                <div className="bg-white/5 p-4 rounded-lg border border-white/20">
                  <Label className="text-white/80 font-['Open_Sans'] text-sm">
                    Переводы поступают на карту МИР:
                  </Label>
                  <div className="text-white font-bold text-lg font-mono mt-1">
                    {cardNumber}
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3">
                  <Label className="text-white font-['Open_Sans']">
                    Выберите способ оплаты:
                  </Label>
                  
                  <Button
                    onClick={() => handlePaymentClick('sber')}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:scale-105 transition-all duration-300 text-white font-bold py-3 font-['Open_Sans'] shadow-lg"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="CreditCard" size={20} />
                      <span>Сбербанк Онлайн → Карта МИР</span>
                    </div>
                  </Button>

                  <Button
                    onClick={() => handlePaymentClick('tinkoff')}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-105 transition-all duration-300 text-white font-bold py-3 font-['Open_Sans'] shadow-lg"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Smartphone" size={20} />
                      <span>Тинькофф → Карта МИР</span>
                    </div>
                  </Button>

                  <Button
                    onClick={() => handlePaymentClick('yoomoney')}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:scale-105 transition-all duration-300 text-white font-bold py-3 font-['Open_Sans'] shadow-lg"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Wallet" size={20} />
                      <span>ЮMoney → Карта МИР</span>
                    </div>
                  </Button>
                </div>
              </div>
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