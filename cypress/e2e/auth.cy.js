describe('E2E: Авторизація користувача', () => {
  it('успішно логінить користувача та перенаправляє на курси', () => {
    cy.visit('/auth');

    cy.get('input[type="email"]').type('student@university.edu');

    // Додаємо {enter} в кінці пароля, щоб миттєво відправити форму
    cy.get('input[type="password"]').type('secretpassword123{enter}');

    cy.url().should('include', '/courses');
    cy.contains('👤 student').should('be.visible');
    cy.contains('Вийти').should('be.visible');
  });
});
