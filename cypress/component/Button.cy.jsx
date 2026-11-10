import Button from '../../src/components/ui/Button';

describe('Юніт-тест компонента <Button />', () => {
  it('відображає переданий текст всередині кнопки', () => {
    cy.mount(<Button>Натисни мене</Button>);
    cy.contains('Натисни мене').should('be.visible');
  });

  it('викликає функцію onClick при натисканні', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(<Button onClick={onClickSpy}>Клік</Button>);

    cy.get('button').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });
});
