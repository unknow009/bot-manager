import styled, { css } from "styled-components";

export default function Payment({ payment }) {
  // якщо в нас список платежів має
  // кількість (на англ length) = 0
  // то тоді ми виводимо іншу верстку
  if (payment.length === 0) {
    return (
      <PaymentList>
        <Empty>Немає транзакцій</Empty>
      </PaymentList>
    );
  }

  if (payment.length === 1) {
    return (
      <PaymentList>
        <Empty>У вас одна транзакція</Empty>
      </PaymentList>
    );
  }
  // тут ми виводимо верстку блока всіх платежів
  // та за допомогою функції .map() яка приймає тег
  // ми для кожного платежу виводимо верстку
  return <PaymentList>{payment.map(PaymentItem)}</PaymentList>;
}

// ось сама верстка одного платежу
function PaymentItem({ name, amount, type }) {
  return (
    <PaymentBlock>
      <PaymentIcon>
        <img src="/icon/transaction.svg" width="30px" height="30px" />
      </PaymentIcon>
      <PaymentText>{name}</PaymentText>
      {/* ось тут ми передаємо параметр type в наш тег */}
      {/* який відповідає за тип нашої платіжки (поповненя чи оплата) */}
      <PaymentAmount type={type}>
        {type}${amount}
      </PaymentAmount>
    </PaymentBlock>
  );
}

// дизайн для тексту "Немає транзакцій"
const Empty = styled.div`
  /* розмір тексту */
  font-size: 16px;

  /* колір */
  color: #aaa;

  /* === */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaymentAmount = styled.div`
  /* розмір тексту суми транзакції */
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* ось тут ми отримуємо наш переданий параметр type */
  /* та можемо в залежності від type */
  /* змінювати колір тексту */

  ${({ type }) => {
    if (type === "+")
      return css`
        color: green;
      `;

    if (type === "-")
      return css`
        color: red;
      `;

    if (type === "*")
      return css`
        color: blue;
      `;

    // якщо ніякий if() не виконався
    // то буде повертатися цей колір #fff
    return css`
      color: #fff;
    `;
  }};
`;

const PaymentIcon = styled.div`
  /* змінити фон іконки транзакції  */
  background: linear-gradient(90deg, #51545b 0%, #767a85 90.71%);

  /* ось так можна поставити просто один колір */
  /* background: red; */

  /* змінити ширину іконки */
  min-width: 60px;

  /* змінити висотку іконки */
  min-height: 60px;

  /* змінити закруглення країв іконки */
  border-radius: 30px;

  /* ==== */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaymentText = styled.div`
  /* змінити розмір тексту транзакції */
  font-size: 18px;

  /* змінити колір транзакції */
  color: #fff;

  /* === */

  width: 100%;
  display: flex;
  align-items: center;
`;

const PaymentList = styled.div`
  /* змінити колір блоку транзакцій  */
  background: #1e1e1e;

  /* змінити закругленя країв  */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  /* змінити отступи від границь  */
  padding: 40px;

  /* змінити зверху отступ до блока з меню  */
  margin-top: 40px;

  /* змінити мінімальну ширину блоку */
  min-height: 120px;

  /* ==== */

  display: grid;
  gap: 24px;
`;

const PaymentBlock = styled.div`
  display: grid;
  grid-template-columns: 60px 4fr 1fr;
  gap: 0px 20px;
  width: 100%;
`;
