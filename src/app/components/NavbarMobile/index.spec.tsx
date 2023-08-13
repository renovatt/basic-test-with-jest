import NavbarMobile from '.'
import { render, fireEvent } from '@testing-library/react'

describe('NavbarMobile Component Tests', () => {
  it('should render NavbarMobile component when modal is true', () => {
    const closeModal = jest.fn()
    const { getByTestId } = render(
      <NavbarMobile modal={true} closeModal={closeModal} />,
    )
    const navbarMobile = getByTestId('navbar-mobile')

    expect(navbarMobile).toBeInTheDocument()
  })

  it('should not render NavbarMobile component when modal is false', () => {
    const closeModal = jest.fn()
    const { queryByTestId } = render(
      <NavbarMobile modal={false} closeModal={closeModal} />,
    )
    const navbarMobile = queryByTestId('navbar-mobile')

    expect(navbarMobile).not.toBeInTheDocument()
  })

  it('should have the correct number of navigation links', () => {
    const closeModal = jest.fn()
    const { getAllByRole } = render(
      <NavbarMobile modal={true} closeModal={closeModal} />,
    )
    const navigationLinks = getAllByRole('link')

    expect(navigationLinks).toHaveLength(5)
  })

  it('should have the correct text and href for each navigation link', () => {
    const closeModal = jest.fn()
    const { getByRole } = render(
      <NavbarMobile modal={true} closeModal={closeModal} />,
    )

    const homeLink = getByRole('link', { name: /início/i })
    const aboutLink = getByRole('link', { name: /sobre/i })
    const vacancyLink = getByRole('link', { name: /vagas/i })
    const blogLink = getByRole('link', { name: /blog/i })
    const projectsLink = getByRole('link', { name: /projetos/i })

    expect(homeLink).toHaveAttribute('href', '/')
    expect(aboutLink).toHaveAttribute('href', '#about-us')
    expect(vacancyLink).toHaveAttribute('href', '#vacancy')
    expect(blogLink).toHaveAttribute('href', '#blog')
    expect(projectsLink).toHaveAttribute('href', '#projects')
  })

  it('should have the correct text for each navigation link', () => {
    const closeModal = jest.fn()
    const { getByRole } = render(
      <NavbarMobile modal={true} closeModal={closeModal} />,
    )

    expect(getByRole('link', { name: /início/i })).toBeInTheDocument()
    expect(getByRole('link', { name: /sobre/i })).toBeInTheDocument()
    expect(getByRole('link', { name: /vagas/i })).toBeInTheDocument()
    expect(getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(getByRole('link', { name: /projetos/i })).toBeInTheDocument()
  })

  it('should call closeModal when navigation link is clicked', () => {
    const closeModalMock = jest.fn()
    const { getByRole } = render(
      <NavbarMobile modal={true} closeModal={closeModalMock} />,
    )

    fireEvent.click(getByRole('link', { name: /início/i }))
    fireEvent.click(getByRole('link', { name: /sobre/i }))
    fireEvent.click(getByRole('link', { name: /vagas/i }))
    fireEvent.click(getByRole('link', { name: /blog/i }))
    fireEvent.click(getByRole('link', { name: /projetos/i }))

    expect(closeModalMock).toHaveBeenCalledTimes(5)
  })

  it('should call closeModal when XMarkIcon is clicked', () => {
    const closeModalMock = jest.fn()
    const { getByTestId } = render(
      <NavbarMobile modal={true} closeModal={closeModalMock} />,
    )
    const xMarkIcon = getByTestId('xmark-icon')

    fireEvent.click(xMarkIcon)

    expect(closeModalMock).toHaveBeenCalled()
  })

  it('should render XMarkIcon', () => {
    const closeModal = jest.fn()
    const { getByTestId } = render(
      <NavbarMobile modal={true} closeModal={closeModal} />,
    )
    const xMarkIcon = getByTestId('xmark-icon')

    expect(xMarkIcon).toBeInTheDocument()
  })

  it('should have the animate-mobileActive class when modal is true', () => {
    const closeModal = jest.fn()
    const { getByTestId } = render(
      <NavbarMobile modal={true} closeModal={closeModal} />,
    )
    const navbarMobile = getByTestId('navbar-mobile')

    expect(navbarMobile).toHaveClass('animate-mobileActive')
  })
})
