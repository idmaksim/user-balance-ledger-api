import { PrismaClient } from '@prisma/client';

export async function seedProducts(prisma: PrismaClient) {
  const products = [
    { name: 'Ноутбук Acer Aspire 5', price: 749.99 },
    { name: 'Смартфон Samsung Galaxy S21', price: 899.99 },
    { name: 'Планшет Apple iPad Air', price: 599.99 },
    { name: 'Умные часы Xiaomi Mi Band 6', price: 49.99 },
    { name: 'Беспроводные наушники Sony WH-1000XM4', price: 349.99 },
    { name: 'Игровая консоль PlayStation 5', price: 499.99 },
    { name: 'Телевизор LG OLED C1', price: 1499.99 },
    { name: 'Фотоаппарат Canon EOS 90D', price: 1199.99 },
    { name: 'Принтер HP LaserJet Pro', price: 299.99 },
    { name: 'Монитор Dell Ultrasharp 27"', price: 399.99 },
    { name: 'Электрическая зубная щетка Oral-B Pro 1000', price: 59.99 },
    { name: 'Робот-пылесос Roborock S7', price: 649.99 },
    { name: 'Микроволновая печь Samsung MS23K3513AS', price: 129.99 },
    { name: 'Кофемашина DeLonghi Magnifica S', price: 549.99 },
    { name: 'Видеорегистратор Xiaomi 70mai Pro', price: 89.99 },
    { name: 'Графический планшет Wacom Intuos Pro', price: 379.99 },
    { name: 'Электросамокат Xiaomi Mi Electric Scooter Pro 2', price: 599.99 },
    { name: 'Блендер Braun MultiQuick 9', price: 149.99 },
    { name: 'Квадрокоптер DJI Mini 2', price: 449.99 },
    { name: 'Умная колонка Google Nest Audio', price: 99.99 },
    { name: 'Портативная колонка JBL Charge 5', price: 179.99 },
    { name: 'Фитнес-браслет Garmin Vivosmart 4', price: 129.99 },
    { name: 'Внешний SSD Samsung T7', price: 159.99 },
    { name: 'Веб-камера Logitech C920', price: 79.99 },
    { name: 'Игровая мышь Razer DeathAdder V2', price: 69.99 },
    { name: 'Механическая клавиатура HyperX Alloy Origins', price: 109.99 },
    { name: 'Графическая карта NVIDIA RTX 3070', price: 599.99 },
    { name: 'Процессор Intel Core i7-12700K', price: 419.99 },
    { name: 'Электрогриль Tefal OptiGrill+', price: 179.99 },
    { name: 'Увлажнитель воздуха Dyson Pure Humidify+Cool', price: 799.99 },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}
