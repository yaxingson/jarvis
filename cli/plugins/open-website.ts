import open from 'open'

export default async function openWebsite(link:string) {
  await open(link)
}
