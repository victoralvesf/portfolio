export type FilterType = "crt" | "scanlines" | "gameboy" | "off"

const labels = {
  crt: 'CRT',
  scanlines: 'Scanlines',
  gameboy: 'Game Boy',
  off: 'Off'
}

const PROPERTY_NAME = "data-filter"
const STORAGE_NAME = "app-filter"

export function setFilterToBody(filter: FilterType) {
	document.body.setAttribute(PROPERTY_NAME, filter)
}

export function saveFilterToStorage(filter: FilterType) {
  localStorage.setItem(STORAGE_NAME, filter)
}

export function getFilterLabel(filter: FilterType) {
  return labels[filter]
}

export function getSavedFilter() {
  const savedFilter = localStorage.getItem(STORAGE_NAME) || "off"

  return savedFilter as FilterType
}

export function setSavedFilter() {
  const savedFilter = getSavedFilter()
	setFilterToBody(savedFilter)
}

export function getNextFilter(current: FilterType) {
  const filters: FilterType[] = ["crt", "scanlines", "gameboy", "off"];

  const currentIndex = filters.indexOf(current);
  const nextIndex = (currentIndex + 1) % filters.length;

  return filters[nextIndex];
}

export function isMobile() {
  return window.innerHeight > window.innerWidth
}
