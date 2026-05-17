import { useState } from "react";

const slides = [
  {
    id: 1,
    tag: "ВСТУПЛЕНИЕ",
    title: "Хватите считать только рекламный бюджет.",
    subtitle: "Сегодня закроем вопрос с ценой клиента навсегда.",
    content: {
      type: "intro",
      items: [
        "Мы не будем говорить о бренде. Мы посчитаем три самые важные цены в вашем бизнесе.",
        "Вы увидите, как не потерять каналы, которые работают втихую и дают клиентов через месяц.",
        "Результат: заберёте с собой шпаргалку и чек-лист на ближайший понедельник.",
      ],
      example:
        "Владелец клининга сливал бюджет на контекст, потому что думал, что блогер не дал продаж. Через месяц оказалось: блогер дал 40% новых клиентов, просто они пришли не сразу.",
      action: "Откройте заметки. Фиксируем каждую цифру, которая касается вашего бизнеса.",
    },
  },
  {
    id: 2,
    tag: "ТЕОРИЯ",
    title: "Цена заказа ≠ Цена клиента.",
    subtitle: "И обе ≠ Цена возврата.",
    content: {
      type: "formulas",
      formulas: [
        {
          name: "Цена заказа (CPO)",
          formula: "Все расходы на маркетинг / Все заказы (новые + повторные)",
        },
        {
          name: "Цена нового клиента (CAC)",
          formula: "Все расходы на маркетинг / Только первые покупки",
        },
        {
          name: "Цена повторного привлечения (CRAC)",
          formula: "Расходы на реактивацию / Возвращённые клиенты",
        },
      ],
      example: {
        title: "Пример: Стоматология",
        lines: [
          "Расходы на маркетинг: 100 000 руб.",
          "Заказов всего: 50 (из них 20 — повторные, 30 — новые)",
          "CPO = 100 000 / 50 = 2 000 руб. (кажется дёшево)",
          "CAC = 100 000 / 30 = 3 333 руб. (реальная цена нового пациента)",
          "CRAC = 10 000 / 20 = 500 руб.",
        ],
      },
      action:
        "В ближайшем отчёте разбейте заказы на «новые» и «повторные». Сравните CAC и CRAC.",
    },
  },
  {
    id: 3,
    tag: "РАСЧЁТ",
    title: "Считаем всё, включая печеньки для менеджера.",
    subtitle: "«Грязный» CAC для ИП",
    content: {
      type: "dirty-cac",
      formula:
        "Реальный CAC = (Бюджет на рекламу + ЗП маркетолога/сммщика + Подписки на сервисы) / Количество новых платящих клиентов",
      points: [
        "Забудьте про рекламный кабинет. Там не учтена зарплата вашего СММ-щика.",
        "Клиент из Instagram за 500 руб. на деле стоит 1 500 руб., если девочка, которая ведёт аккаунт, получает 30 000 руб. и приводит 20 клиентов.",
      ],
      example: {
        title: "Пример: Клининг",
        lines: [
          "Реклама в Директе: 60 000 руб.",
          "ЗП менеджера: 40 000 руб.",
          "Сервис CRM: 5 000 руб.",
          "Итого: 105 000 руб.",
          "Новых клиентов: 30 (средний чек 3 500 руб.)",
          "CAC = 105 000 / 30 = 3 500 руб.",
        ],
        highlight: "Средний чек равен CAC. Деньги клиента полностью уходят на его привлечение.",
      },
      action:
        "Внесите в Excel ЗП администратора. Делите пропорционально времени на новые заявки.",
    },
  },
  {
    id: 4,
    tag: "КЕЙС",
    title: "Сравнение каналов.",
    subtitle: "Выключаем неэффективное.",
    content: {
      type: "channels",
      channels: [
        {
          name: "Яндекс.Директ",
          budget: "50 000 руб.",
          leads: "30 заявок",
          conversion: "30% → 9 новых клиентов",
          cac: "5 555 руб.",
          color: "red",
        },
        {
          name: "Instagram (блогер)",
          budget: "15 000 руб.",
          leads: "10 заявок",
          conversion: "→ 5 новых клиентов",
          cac: "3 000 руб.",
          color: "neutral",
        },
        {
          name: "Сарафанное радио",
          budget: "0 руб. (скидки 1 000 руб.)",
          leads: "—",
          conversion: "→ 8 новых клиентов",
          cac: "1 000 руб.",
          color: "green",
        },
      ],
      action:
        "Разбейте ВСЕ каналы на три колонки: Источник, Бюджет, Кол-во новых. Тот, где CAC самый высокий — оптимизировать или отключить сегодня.",
    },
  },
  {
    id: 5,
    tag: "ШПАРГАЛКА",
    title: "Вырежь и сохрани.",
    subtitle: "Формулы за 1 минуту",
    content: {
      type: "cheatsheet",
      rows: [
        { name: "Цена заказа (CPO)", formula: "Все расходы / Все заказы" },
        { name: "CAC грязный", formula: "(Бюджет + ЗП + Сервисы) / Новые клиенты" },
        { name: "CRAC", formula: "Расходы на возврат / Возвращённые клиенты" },
        { name: "CPL", formula: "Бюджет / Заявки" },
        { name: "CR", formula: "Клиенты / Заявки × 100%" },
        { name: "ROMI", formula: "(Доход – Расход) / Расход × 100%" },
      ],
      example: {
        title: "Быстрый расчёт ROMI: Онлайн-курс",
        lines: [
          "Затраты на трафик: 100 000 руб.",
          "Купили: 20 чел. × 15 000 руб. = 300 000 руб.",
          "ROMI = (300 000 − 100 000) / 100 000 × 100% = 200%",
        ],
        highlight: "Масштабируем.",
      },
    },
  },
  {
    id: 6,
    tag: "ЛОВУШКА",
    title: "Почему «дешёвый» клиент не всегда выгодный.",
    subtitle: "Платёжеспособный CAC и LTV",
    content: {
      type: "trap",
      comparison: [
        {
          label: "Avito",
          cac: "CAC 1 000 руб.",
          check: "Средний чек 2 000 руб.",
          returns: "Вернулся 0 раз",
          ltv: "LTV = 2 000 руб.",
          result: "Прибыль ≈ 0",
          bad: true,
        },
        {
          label: "ТГ-канал",
          cac: "CAC 3 000 руб.",
          check: "Средний чек 8 000 руб.",
          returns: "Вернулся 3 раза",
          ltv: "LTV = 24 000 руб.",
          result: "Прибыль огромная",
          bad: false,
        },
      ],
      example: {
        title: "Доставка воды",
        lines: [
          "Канал А: CAC 400 руб. → покупка разово → LTV = 400 руб. → прибыль = 0",
          "Канал Б: CAC 1 500 руб. → офис, подписка 3 000 руб./мес. × 12 мес. → LTV = 36 000 руб.",
        ],
      },
      action:
        "Поднимите базу клиентов за год. Смотрите, с какого источника приходят клиенты с самым высоким средним чеком. Именно туда лейте бюджет.",
    },
  },
  {
    id: 7,
    tag: "ОТЛОЖЕННЫЙ ЭФФЕКТ",
    title: "Не убили ли вы канал, который дал бы клиентов через месяц?",
    subtitle: "Каналы с долгим циклом сделки",
    content: {
      type: "delayed",
      points: [
        "Контент-маркетинг, SEO, прогрев в блоге — деньги потрачены сейчас, заявки пойдут через 2–3 месяца.",
        "Если оцениваете такой канал по итогам первой недели — сольёте бюджет зря.",
        "Ассоциированные конверсии и пост-клик анализ покажут обратное.",
      ],
      example: {
        title: "Доставка здоровой еды: статья у блогера",
        lines: [
          "Затраты: 20 000 руб.",
          "День выхода: 1 заказ → CAC = 20 000 руб. (ужас!)",
          "Через месяц: 15 заказов из поиска + 5 повторных → CAC = 1 000 руб. (отлично!)",
        ],
      },
      action:
        "Для каждого канала определите «окно атрибуции»: 30 дней для контента, 7 дней для контекста. Не режьте бюджет раньше срока.",
    },
  },
  {
    id: 8,
    tag: "ОНЛАЙН-ТРЕКИНГ",
    title: "UTM-метки, коллтрекинг и пиксели за 10 минут.",
    subtitle: "База без программиста",
    content: {
      type: "tracking",
      tools: [
        {
          name: "UTM-метки",
          desc: "utm_source (vk, yandex), utm_medium (cpc, post), utm_campaign (название). Без них — слепота.",
        },
        {
          name: "Коллтрекинг",
          desc: "Подмена номеров на сайте под каждый источник. Сервисы: Callibri, Calltouch.",
        },
        {
          name: "Пиксели / Метрика",
          desc: "Настройте цели: «Клик по телефону», «Отправка формы», «Оплата».",
        },
      ],
      example: {
        title: "Онлайн-курс по йоге",
        lines: [
          "UTM: ?utm_source=tg&utm_medium=post&utm_campaign=vesna",
          "В Метрике: 100 кликов → 10 заявок → CPL посчитан",
        ],
      },
      action:
        "Сегодня создайте шаблон UTM-метки для всех будущих запусков. Без этого ни один пост не публикуем.",
    },
  },
  {
    id: 9,
    tag: "ОФЛАЙН-ТРЕКИНГ",
    title: "Как понять, что офлайн-реклама не просто «для узнаваемости».",
    subtitle: "Флаеры, визитки, листовки",
    content: {
      type: "offline",
      tools: [
        {
          name: "Промокоды",
          desc: "«Назови кодовое слово ЧИСТОТА — скидка 10%». Код меняем для каждой акции.",
        },
        { name: "QR-коды", desc: "На визитке ведёт на спец. страницу с UTM-меткой." },
        {
          name: "Отдельный номер",
          desc: "Виртуальный номер для билборда/листовки. Все звонки = результат этой рекламы.",
        },
        {
          name: "Вопрос в скрипте",
          desc: "Не «Как узнали?», а «Что именно вас подтолкнуло записаться сегодня?»",
        },
      ],
      example: {
        title: "Стоматология",
        lines: [
          "1 000 флаеров с промокодом «УЛЫБКА2026» + QR-код",
          "За месяц: 15 новых пациентов по промокоду",
          "Расходы на флаеры: 5 000 руб.",
          "CAC = 5 000 / 15 = 333 руб.",
        ],
      },
      action:
        "Введите в скрипт администратора вопрос «Что подтолкнуло вас к записи именно сегодня?» и поле в CRM для ответа.",
    },
  },
  {
    id: 10,
    tag: "АТРИБУЦИЯ",
    title: "Последний клик — не главный.",
    subtitle: "Ассоциированные конверсии",
    content: {
      type: "attribution",
      chain: [
        { step: "1", label: "Instagram", desc: "Увидел пост — не кликнул" },
        { step: "2", label: "Поиск", desc: "Через 3 дня погуглил по бренду" },
        { step: "3", label: "Директ", desc: "Перешёл по рекламе — купил" },
      ],
      insight:
        "По последнему клику — Директ привёл клиента. На деле — Instagram сыграл ключевую роль. Отчёт «Ассоциированные конверсии» в Яндекс.Метрике покажет это.",
      example: {
        title: "Салон красоты",
        lines: [
          "Таргет в Instagram: прямой CAC = 5 000 руб. (кажется дорого)",
          "В ассоциированных: 30% всех покупок — через Instagram",
          "Именно он создаёт спрос. Нельзя отключать.",
        ],
      },
      action:
        "Откройте Метрику → Отчёты → Ассоциированные конверсии. Найдите канал-тихоню, который вас кормит, и перестаньте его резать.",
    },
  },
  {
    id: 11,
    tag: "ОШИБКИ",
    title: "Симптомы болезни.",
    subtitle: "Узнали себя — лечим.",
    content: {
      type: "errors",
      rows: [
        {
          symptom: "«У меня CPO низкий, всё отлично»",
          diagnosis:
            "Смотрите на цену заказа в целом, а новые клиенты стоят в 3 раза дороже и не окупаются.",
        },
        {
          symptom: "«Директ — дно, надо в ТикТок!»",
          diagnosis:
            "Смотрите на последний клик. SEO/соцсети могли прогреть до клика. Игнорируете ассоциированные конверсии.",
        },
        {
          symptom: "«Блогер привёл 1 заказ за 20 000, я его отключил»",
          diagnosis:
            "Не дали каналу с отложенным эффектом время. Через месяц мог привести 15 заказов.",
        },
        {
          symptom: "«Офлайн-реклама не работает»",
          diagnosis:
            "Нет промокода, QR-кода, отдельного номера. Вы просто не видите результат.",
        },
        {
          symptom: "«В этом месяце клиент подорожал в 2 раза!»",
          diagnosis: "Сравниваете просадку января с пиком декабря. Сезонность никто не отменял.",
        },
        {
          symptom: "Нет офлайн-трекинга",
          diagnosis: "Флаеры, мероприятия, визитки — бюджет есть, данных нет.",
        },
      ],
    },
  },
  {
    id: 12,
    tag: "СТРАТЕГИЯ №1",
    title: "Деньги лежат в вашей CRM.",
    subtitle: "Реанимация без затрат",
    content: {
      type: "strategy1",
      tool: "Работа с базой «тёплых» контактов",
      example: {
        title: "Стоматология",
        lines: [
          "База: 500 человек, кто был 6–12 месяцев назад",
          "Скрипт: «Иван Петрович, мы обновляли карту... Держите бронь на бесплатный осмотр со скидкой 40% на 3 дня»",
          "Затраты: 0 руб. (ЗП админа фикс)",
          "Результат: 40 пришли, 30 остались на лечение (средний чек 6 000 руб.)",
          "CRAC = 0 руб. Чистая прибыль.",
        ],
      },
      action:
        "В CRM выберите клиентов, кто был 3–6 месяцев назад, но не пришёл повторно. Напишите 1 сообщение в мессенджер с предложением «как старый друг».",
    },
  },
  {
    id: 13,
    tag: "СТРАТЕГИЯ №2",
    title: "Снижаем цену клиента, не снижая цену клика.",
    subtitle: "Турбо-конверсия сайта и профиля",
    content: {
      type: "strategy2",
      formula: "CAC = CPC / Конверсия. Не трогая цену клика — поднимите конверсию — CAC упадёт.",
      before: {
        label: "БЫЛО",
        lines: [
          "CPC 50 руб., конверсия 2%",
          "CPL = 2 500 руб.",
          "Шапка: «Мы лучшие»",
          "Форма: 5 полей",
          "Кнопка: «Отправить»",
        ],
      },
      after: {
        label: "СТАЛО",
        lines: [
          "CPC 50 руб., конверсия 5%",
          "CPL = 1 000 руб. (−60%!)",
          "Шапка: «Доставим за 30 мин или БЕСПЛАТНО»",
          "Форма: 2 поля (имя + телефон)",
          "Кнопка: «Успеть с доставкой за 0₽»",
        ],
      },
      action:
        "Откройте сайт на мобильном. Если от входа до клика «Купить» больше 15 секунд и 3 экранов — у вас дыра в бюджете.",
    },
  },
  {
    id: 14,
    tag: "СТРАТЕГИЯ №3",
    title: "Заработай на клиенте сразу, чтобы окупить его приход.",
    subtitle: "Разблокировка доп. продаж",
    content: {
      type: "strategy3",
      concept:
        "Не снижайте CAC механически. Увеличьте средний чек и маржу с первой продажи.",
      example: {
        title: "Салон красоты",
        lines: [
          "CAC = 1 500 руб. Маникюр стоит 1 500 руб. — работа за еду.",
          "Решение: KPI менеджеру — продать 30% клиентов «покрытие гель-лаком для ног» со скидкой 20% (доп. +900 руб.).",
          "Каждый третий клиент берёт комплекс → чек вырастает до 1 800 руб.",
          "CAC всё ещё 1 500, но прибыль с клиента появилась.",
        ],
      },
      script:
        "«Пока мастер будет обрабатывать ваши руки, может, заодно сделаем педикюр? Сегодня на него скидка 20% для тех, кто совмещает.»",
    },
  },
  {
    id: 15,
    tag: "ЧЕК-ЛИСТ",
    title: "7 дел, которые изменят вашу юнит-экономику к пятнице.",
    subtitle: "Финальный чек-лист «Понедельник»",
    content: {
      type: "checklist",
      items: [
        "Разделить заказы на «новые» и «повторные». Посчитать отдельно CAC и CRAC.",
        "Создать поле «Источник» в CRM. Скрипт вопроса: «Что подтолкнуло вас записаться?»",
        "Настроить UTM-метки для всех будущих рекламных ссылок.",
        "Внедрить в офлайн-материалы минимум 1 промокод или QR-код.",
        "Открыть Яндекс.Метрику → «Ассоциированные конверсии». Выписать каналы-ассистенты.",
        "Проверить отложенные каналы. Не резать SEO/блогеров раньше времени.",
        "Посчитать «грязный» CAC. Худший канал — урезать на 50%, бюджет → на лучший.",
      ],
      cta: "Выполните эти 7 шагов. Результат увидите в деньгах, а не в отчётах.",
    },
  },
];

function SlideContent({ slide }: { slide: (typeof slides)[0] }) {
  const { content } = slide;

  if (content.type === "intro") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <div className="space-y-4">
          {content.items.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-red-600 font-bold text-lg leading-none mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-snug">{item}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="bg-red-600 text-white p-5">
            <p className="text-xs uppercase tracking-widest mb-2 opacity-70">Кейс</p>
            <p className="text-sm leading-relaxed">{content.example}</p>
          </div>
          <div className="border-l-4 border-black pl-4">
            <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
            <p className="text-sm font-medium">{content.action}</p>
          </div>
        </div>
      </div>
    );
  }

  if (content.type === "formulas") {
    return (
      <div className="space-y-5 h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {content.formulas.map((f, i) => (
            <div key={i} className="bg-black text-white p-4">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">{f.name}</p>
              <p className="text-sm font-bold leading-snug">{f.formula}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-black p-4">
            <p className="text-xs uppercase tracking-widest mb-3 text-neutral-500">
              {content.example.title}
            </p>
            {content.example.lines.map((l, i) => (
              <p key={i} className="text-sm py-1 border-b border-neutral-200 last:border-0">
                {l}
              </p>
            ))}
          </div>
          <div className="border-l-4 border-red-600 pl-4 flex flex-col justify-end">
            <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
            <p className="text-sm font-medium">{content.action}</p>
          </div>
        </div>
      </div>
    );
  }

  if (content.type === "dirty-cac") {
    return (
      <div className="space-y-4 h-full">
        <div className="bg-black text-white p-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Формула</p>
          <p className="text-sm font-bold">{content.formula}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {content.points.map((p, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-red-600 font-bold">→</span>
                <p className="text-sm">{p}</p>
              </div>
            ))}
            <div className="border-l-4 border-red-600 pl-4 mt-4">
              <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
              <p className="text-sm font-medium">{content.action}</p>
            </div>
          </div>
          <div className="border border-black p-4">
            <p className="text-xs uppercase tracking-widest mb-3 text-neutral-500">
              {content.example.title}
            </p>
            {content.example.lines.map((l, i) => (
              <p key={i} className="text-sm py-1 border-b border-neutral-200 last:border-0">
                {l}
              </p>
            ))}
            <div className="mt-3 bg-red-600 text-white p-3">
              <p className="text-xs font-bold">{content.example.highlight}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (content.type === "channels") {
    return (
      <div className="space-y-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.channels.map((ch, i) => (
            <div
              key={i}
              className={`p-4 border-2 ${ch.color === "red" ? "border-red-600 bg-red-50" : ch.color === "green" ? "border-black bg-neutral-900 text-white" : "border-neutral-300"}`}
            >
              <p className="text-xs uppercase tracking-widest mb-3 opacity-70">{ch.name}</p>
              <p className="text-sm mb-1">Бюджет: {ch.budget}</p>
              <p className="text-sm mb-1">{ch.leads}</p>
              <p className="text-sm mb-3">{ch.conversion}</p>
              <p className="text-2xl font-bold">
                CAC = {ch.cac}
              </p>
              {ch.color === "red" && <p className="text-xs text-red-600 mt-1 font-bold">САМЫЙ ДОРОГОЙ</p>}
              {ch.color === "green" && <p className="text-xs text-green-400 mt-1 font-bold">САМЫЙ ДЕШЁВЫЙ</p>}
            </div>
          ))}
        </div>
        <div className="border-l-4 border-black pl-4">
          <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
          <p className="text-sm font-medium">{content.action}</p>
        </div>
      </div>
    );
  }

  if (content.type === "cheatsheet") {
    return (
      <div className="space-y-4 h-full">
        <div className="border border-black overflow-hidden">
          <div className="grid grid-cols-2 bg-black text-white">
            <div className="p-3 text-xs uppercase tracking-widest">Показатель</div>
            <div className="p-3 text-xs uppercase tracking-widest border-l border-neutral-700">Формула</div>
          </div>
          {content.rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-t border-black ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
            >
              <div className="p-3 text-sm font-bold">{row.name}</div>
              <div className="p-3 text-sm border-l border-black font-mono text-red-600">{row.formula}</div>
            </div>
          ))}
        </div>
        <div className="bg-black text-white p-4">
          <p className="text-xs uppercase tracking-widest mb-2 text-neutral-400">
            {content.example.title}
          </p>
          {content.example.lines.map((l, i) => (
            <p key={i} className="text-sm py-0.5">{l}</p>
          ))}
          <p className="text-red-400 font-bold mt-2">{content.example.highlight}</p>
        </div>
      </div>
    );
  }

  if (content.type === "trap") {
    return (
      <div className="space-y-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.comparison.map((c, i) => (
            <div
              key={i}
              className={`p-5 border-2 ${c.bad ? "border-red-600" : "border-black bg-black text-white"}`}
            >
              <p className="text-xs uppercase tracking-widest mb-3 opacity-70">{c.label}</p>
              <p className="text-sm mb-1">{c.cac}</p>
              <p className="text-sm mb-1">{c.check}</p>
              <p className="text-sm mb-1">{c.returns}</p>
              <p className={`text-sm mb-3 ${c.bad ? "" : "text-green-400"}`}>{c.ltv}</p>
              <p className={`text-xl font-bold ${c.bad ? "text-red-600" : "text-white"}`}>{c.result}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-black p-4">
            <p className="text-xs uppercase tracking-widest mb-2 text-neutral-500">{content.example.title}</p>
            {content.example.lines.map((l, i) => (
              <p key={i} className="text-sm py-1 border-b border-neutral-200 last:border-0">{l}</p>
            ))}
          </div>
          <div className="border-l-4 border-red-600 pl-4 flex items-end">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
              <p className="text-sm font-medium">{content.action}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (content.type === "delayed") {
    return (
      <div className="space-y-4 h-full">
        <div className="space-y-3">
          {content.points.map((p, i) => (
            <div key={i} className="flex gap-4 items-start border-b border-neutral-200 pb-3">
              <span className="text-red-600 font-bold text-lg">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-snug">{p}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black text-white p-4">
            <p className="text-xs uppercase tracking-widest mb-2 text-neutral-400">{content.example.title}</p>
            {content.example.lines.map((l, i) => (
              <p key={i} className="text-sm py-1 border-b border-neutral-700 last:border-0">{l}</p>
            ))}
          </div>
          <div className="border-l-4 border-red-600 pl-4 flex items-center">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
              <p className="text-sm font-medium">{content.action}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (content.type === "tracking") {
    return (
      <div className="space-y-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {content.tools.map((t, i) => (
            <div key={i} className="border border-black p-4">
              <p className="text-xs uppercase tracking-widest mb-2 text-red-600">{t.name}</p>
              <p className="text-sm leading-snug">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black text-white p-4">
            <p className="text-xs uppercase tracking-widest mb-2 text-neutral-400">{content.example.title}</p>
            {content.example.lines.map((l, i) => (
              <p key={i} className="text-sm py-1 border-b border-neutral-700 last:border-0">{l}</p>
            ))}
          </div>
          <div className="border-l-4 border-red-600 pl-4 flex items-center">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
              <p className="text-sm font-medium">{content.action}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (content.type === "offline") {
    return (
      <div className="space-y-4 h-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {content.tools.map((t, i) => (
            <div key={i} className="border border-black p-4">
              <p className="text-xs uppercase tracking-widest mb-2 text-red-600">{t.name}</p>
              <p className="text-sm leading-snug">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black text-white p-4">
            <p className="text-xs uppercase tracking-widest mb-2 text-neutral-400">{content.example.title}</p>
            {content.example.lines.map((l, i) => (
              <p key={i} className="text-sm py-1 border-b border-neutral-700 last:border-0">{l}</p>
            ))}
          </div>
          <div className="border-l-4 border-red-600 pl-4 flex items-center">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
              <p className="text-sm font-medium">{content.action}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (content.type === "attribution") {
    return (
      <div className="space-y-4 h-full">
        <div className="flex items-center gap-0">
          {content.chain.map((c, i) => (
            <div key={i} className="flex items-center flex-1">
              <div className={`flex-1 p-4 ${i === 0 ? "bg-neutral-100" : i === 1 ? "bg-neutral-300" : "bg-black text-white"}`}>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-1">{c.step}</p>
                <p className="text-sm font-bold">{c.label}</p>
                <p className="text-xs mt-1 opacity-70">{c.desc}</p>
              </div>
              {i < content.chain.length - 1 && (
                <div className="text-2xl font-bold text-red-600 px-2">→</div>
              )}
            </div>
          ))}
        </div>
        <div className="border-l-4 border-red-600 pl-4">
          <p className="text-sm">{content.insight}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-black p-4">
            <p className="text-xs uppercase tracking-widest mb-2 text-neutral-500">{content.example.title}</p>
            {content.example.lines.map((l, i) => (
              <p key={i} className="text-sm py-1 border-b border-neutral-200 last:border-0">{l}</p>
            ))}
          </div>
          <div className="border-l-4 border-black pl-4 flex items-center">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
              <p className="text-sm font-medium">{content.action}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (content.type === "errors") {
    return (
      <div className="border border-black overflow-hidden h-full">
        <div className="grid grid-cols-2 bg-black text-white">
          <div className="p-3 text-xs uppercase tracking-widest">Симптом</div>
          <div className="p-3 text-xs uppercase tracking-widest border-l border-neutral-700">Диагноз</div>
        </div>
        {content.rows.map((row, i) => (
          <div key={i} className={`grid grid-cols-2 border-t border-black ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}>
            <div className="p-3 text-sm font-bold text-red-600">{row.symptom}</div>
            <div className="p-3 text-sm border-l border-black">{row.diagnosis}</div>
          </div>
        ))}
      </div>
    );
  }

  if (content.type === "strategy1") {
    return (
      <div className="space-y-4 h-full">
        <div className="bg-black text-white p-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Инструмент</p>
          <p className="text-base font-bold">{content.tool}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-black p-4">
            <p className="text-xs uppercase tracking-widest mb-3 text-neutral-500">{content.example.title}</p>
            {content.example.lines.map((l, i) => (
              <p key={i} className={`text-sm py-1.5 border-b border-neutral-200 last:border-0 ${l.includes("CRAC") ? "text-red-600 font-bold" : ""}`}>{l}</p>
            ))}
          </div>
          <div className="border-l-4 border-red-600 pl-4 flex items-center">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
              <p className="text-sm font-medium">{content.action}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (content.type === "strategy2") {
    return (
      <div className="space-y-4 h-full">
        <div className="border-l-4 border-black pl-4">
          <p className="text-sm font-bold">{content.formula}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-red-600 p-4">
            <p className="text-xs uppercase tracking-widest mb-3 text-red-600">{content.before.label}</p>
            {content.before.lines.map((l, i) => (
              <p key={i} className="text-sm py-1 border-b border-neutral-200 last:border-0">{l}</p>
            ))}
          </div>
          <div className="border-2 border-black bg-black text-white p-4">
            <p className="text-xs uppercase tracking-widest mb-3 text-green-400">{content.after.label}</p>
            {content.after.lines.map((l, i) => (
              <p key={i} className={`text-sm py-1 border-b border-neutral-700 last:border-0 ${l.includes("−60%") ? "text-green-400 font-bold" : ""}`}>{l}</p>
            ))}
          </div>
        </div>
        <div className="border-l-4 border-red-600 pl-4">
          <p className="text-xs uppercase tracking-widest mb-1 text-neutral-500">Ваше действие</p>
          <p className="text-sm font-medium">{content.action}</p>
        </div>
      </div>
    );
  }

  if (content.type === "strategy3") {
    return (
      <div className="space-y-4 h-full">
        <div className="border-l-4 border-black pl-4">
          <p className="text-sm font-bold">{content.concept}</p>
        </div>
        <div className="border border-black p-4">
          <p className="text-xs uppercase tracking-widest mb-3 text-neutral-500">{content.example.title}</p>
          {content.example.lines.map((l, i) => (
            <p key={i} className={`text-sm py-1.5 border-b border-neutral-200 last:border-0 ${l.includes("прибыль") ? "font-bold text-red-600" : ""}`}>{l}</p>
          ))}
        </div>
        <div className="bg-black text-white p-4">
          <p className="text-xs uppercase tracking-widest mb-2 text-neutral-400">Скрипт администратору</p>
          <p className="text-sm italic">{content.script}</p>
        </div>
      </div>
    );
  }

  if (content.type === "checklist") {
    return (
      <div className="space-y-3 h-full">
        <div className="space-y-2">
          {content.items.map((item, i) => (
            <div key={i} className="flex gap-4 items-start border-b border-neutral-200 pb-2">
              <div className="w-6 h-6 border-2 border-black flex-shrink-0 flex items-center justify-center mt-0.5">
                <span className="text-xs font-bold">{i + 1}</span>
              </div>
              <p className="text-sm leading-snug">{item}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-600 text-white p-4 text-center">
          <p className="text-base font-bold uppercase tracking-widest">{content.cta}</p>
        </div>
      </div>
    );
  }

  return null;
}

export default function Index() {
  const [current, setCurrent] = useState(0);

  const slide = slides[current];
  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  return (
    <main className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Inter', Arial, sans-serif" }}>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="px-4 md:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold tracking-tighter uppercase">
              Цена клиента
            </span>
            <span className="hidden md:block text-xs text-neutral-400 uppercase tracking-widest">
              Как считать и управлять
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              {current + 1} / {slides.length}
            </span>
            <div className="flex gap-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-none transition-colors ${i === current ? "bg-red-600" : i < current ? "bg-black" : "bg-neutral-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Slide */}
      <div className="flex-1 pt-14 flex flex-col">
        <div className="flex-1 container mx-auto px-4 md:px-8 py-6 flex flex-col">
          {/* Slide header */}
          <div className="mb-5">
            <div className="flex items-start gap-4 mb-2">
              <div className="bg-black text-white px-3 py-1 text-xs uppercase tracking-widest flex-shrink-0">
                {String(slide.id).padStart(2, "0")} {slide.tag}
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight mb-1">
              {slide.title}
            </h1>
            <p className="text-base md:text-lg text-neutral-500">{slide.subtitle}</p>
          </div>

          {/* Slide body */}
          <div className="flex-1">
            <SlideContent slide={slide} />
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-black">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-stretch">
              <button
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                disabled={isFirst}
                className={`py-4 px-6 text-sm uppercase tracking-widest font-bold border-r border-black transition-colors ${isFirst ? "text-neutral-300 cursor-not-allowed" : "hover:bg-black hover:text-white"}`}
              >
                ← Назад
              </button>

              <div className="flex-1 flex items-center justify-center">
                <span className="text-xs text-neutral-400 uppercase tracking-widest hidden md:block">
                  {isLast ? "Конец презентации" : slides[current + 1]?.tag}
                </span>
              </div>

              <button
                onClick={() => setCurrent((c) => Math.min(slides.length - 1, c + 1))}
                disabled={isLast}
                className={`py-4 px-6 text-sm uppercase tracking-widest font-bold border-l border-black transition-colors ${isLast ? "bg-red-600 text-white cursor-default" : "hover:bg-black hover:text-white"}`}
              >
                {isLast ? "Финиш" : "Далее →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
