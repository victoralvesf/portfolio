import { SparklesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLayoutEffect, useMemo, useState, useEffect } from "react"
import {
  getFilterLabel,
  getNextFilter,
  getSavedFilter,
  isMobile,
  saveFilterToStorage,
  setFilterToBody,
  setSavedFilter,
  type FilterType,
} from "@/utils/filter"

export function FilterToggle() {
  const [mobile, setMobile] = useState<boolean>(() => isMobile())
  const [filter, setFilter] = useState<FilterType>("crt")
  const filterLabel = useMemo(() => getFilterLabel(filter), [filter])

  useLayoutEffect(() => {
    setFilter(getSavedFilter())
    setSavedFilter()
  }, [])

  useEffect(() => {
    if (mobile) {
      setFilterToBody("off")
    }
  }, [mobile])

  const handleClick = () => {
    const next = getNextFilter(filter)
    
    setFilter(next)
    setFilterToBody(next)
    saveFilterToStorage(next)
  }

  if (mobile) return null

  return (
    <Button onClick={handleClick}>
      <SparklesIcon className="size-4 fill-background" />
      <span>{filterLabel}</span>
    </Button>
  )
}