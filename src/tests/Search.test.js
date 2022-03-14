import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../components/Search";

describe("Search component", () => {
	it("should render Welcome if seachedTerm state is equal to empty string", () => {
		const { queryByText } = render(<Search />);
		const welcome = queryByText("Welcome");
	});
});
