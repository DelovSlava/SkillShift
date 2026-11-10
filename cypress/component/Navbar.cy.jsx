import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../src/components/layout/Navbar';

describe('Юніт-тест компонента <Navbar />', () => {
  it('відображає логотип SkillShift та навігаційні посилання', () => {
    cy.mount(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    cy.contains('SkillShift').should('be.visible');
    cy.contains('Головна').should('be.visible');
    cy.contains('Курси').should('be.visible');
    cy.contains('Навчання з AI').should('be.visible');
    cy.contains('Увійти').should('be.visible');
  });
});
