import { TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconSearch } from "@tabler/icons"
import qs from "qs"
import { useSearchParams } from "react-router-dom"

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const form = useForm({ initialValues: { search: searchParams.get("q") } })
  const inputProps = form.getInputProps("search")
  const onSubmit = form.onSubmit(values => {
    if (values.search) {
      const params = qs.stringify({ q: values.search })
      setSearchParams(params)
      form.setValues({ search: "" })
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        data-cy="search-input"
        placeholder="search..."
        icon={<IconSearch />}
        {...inputProps}
      />
    </form>
  )
}
