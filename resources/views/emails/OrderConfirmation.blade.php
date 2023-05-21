<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Заказ M&F</title>
</head>
<body>
    <h1>Заказ Mens Fashion</h1>
    <h4>Здравствуйте, {{ $order->user->full_name }}!</h4>
    <p>Ваш заказ оформлен и находится на этапе сбора.</p>
    <p>В день доставки курьер свяжется с вами для назначения точного времени.</p>
    <h2>Информация о заказе</h2>
    <p>Номер заказа: {{ $order->id }}</p>
    <p>Адрес доставки: {{ $order->user->email }}</p>
    <p>Дата доставки: {{ $order->date }} </p>
    
    <h2>Заказанные товары</h2>
    <ol>
        @foreach ($order->orderItems as $item)
            <li>
                <p>Название продукта: {{ $item->product->name }}</p>
                <p>Цвет: {{ $item->color->name }}</p>
                <p>Размер: {{ $item->size->name }}</p>
                <p>Количество: {{ $item->quantity }} шт.</p>
            </li>
        @endforeach
    </ol>

    <h3>Итоговая стоимость: {{ $order->total_price }} р.</h3>
    
    <p>Спасибо за ваш заказ!</p>
</body>
</html>
