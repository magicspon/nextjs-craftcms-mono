---
to: packages/<%= package %>/src/hooks/use<%= h.changeCase.pascalCase(name) %>/__tests__/use<%= h.changeCase.pascalCase(name) %>.test.tsx
---
import { renderHook, act } from '@testing-library/react-hooks'
import use<%= h.changeCase.pascalCase(name) %>, { Iuse<%= h.changeCase.pascalCase(name) %>Props } from '..';

const defaultProps: Iuse<%= h.changeCase.pascalCase(name) %>Props = {
  initialIndex: 0
};

describe('<%= h.changeCase.pascalCase(name) %>', () => {
  it('renders', () => {
		const { result } = renderHook(() => use<%= h.changeCase.pascalCase(name) %>(defaultProps))

		act(() => {
			result.current.increment()
		})

		expect(result.current.count).toBe(1)
  });
});
