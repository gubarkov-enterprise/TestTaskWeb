# WebReporter

Описание задания

Сайт представляет из себя систему заявок, где любой желающий может зайти и создать обращение. После создания обращения администратору системы поступает уведомление на электронную почту. Администратор системы рассматривает обращение и выносит решение – удовлетворить или отклонить. При изменении статуса обращения пользователю на электронную почту отправляется уведомление. Так же в системе необходимо предусмотреть роль аудитора, который может просматривать все обработанные администратором обращения, смотреть сводный отчет со средним времени выполнения. Обращения, по которым отклонение более чем в два раза выше (от среднего времени закрытия обращения) выделены красным цветом. Аудитор может кликнуть с отчета на любое обращение и провалиться в него. Администратор системы так же уполномочен просматривать закрытие обращения. Для удобства необходимо реализовать фильтр (новые, закрытые) и сортировку обращений по основным полям.
Сайт должен корректно работать в любом браузере на любой платформе включая мобильный телефон (адаптивная верстка). Сайт должен быть консервативным и интуитивно понятным.
При первом запуске сайт должен запрашивать путь к серверу БД и логин и пароль администратора, последующие запуски настройки должны браться из сохраненных.
Для загрузки необходимых пакетов должен использоваться только официальный репозиторий nuget.org. 
Приложение должно собираться и запускаться без каких-либо дополнительных настроек, либо из Visual Studio, либо развернуться на IIS.

