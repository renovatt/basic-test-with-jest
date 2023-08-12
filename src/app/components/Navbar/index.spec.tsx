import Navbar from "."
import { fireEvent, render } from "@testing-library/react"

describe('Navbar Component Tests', () => {
  it('should render Navbar component', () => {
    render(<Navbar openModal={() => { }} />)
  })

  it('should call openModal when Bars3Icon is clicked', () => {
    const openModalMock = jest.fn()
    const { getByTestId } = render(<Navbar openModal={openModalMock} />)
    const barsIcon = getByTestId('svg-close-modal')

    fireEvent.click(barsIcon)

    expect(openModalMock).toHaveBeenCalled()
  })

  it('should render Bars3Icon', () => {
    const { getByTestId } = render(<Navbar openModal={() => { }} />);
    const barsIcon = getByTestId('svg-close-modal');

    expect(barsIcon).toBeInTheDocument();
  });

  it('should have the correct number of navigation links', () => {
    const { getAllByRole } = render(<Navbar openModal={() => { }} />);
    const navigationLinks = getAllByRole('link');

    expect(navigationLinks).toHaveLength(5);
  });

  it('should have the correct text and href for each navigation link', () => {
    const { getByRole } = render(<Navbar openModal={() => { }} />);
    const homeLink = getByRole('link', { name: /início/i });
    const aboutLink = getByRole('link', { name: /sobre/i });
    const vacancyLink = getByRole('link', { name: /vagas/i });
    const blogLink = getByRole('link', { name: /blog/i });
    const projectsLink = getByRole('link', { name: /projetos/i });

    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '#about-us');
    expect(vacancyLink).toHaveAttribute('href', '#vacancy');
    expect(blogLink).toHaveAttribute('href', '#blog');
    expect(projectsLink).toHaveAttribute('href', '#projects');
  });
})