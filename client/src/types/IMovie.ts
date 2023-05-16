import { IReview } from "./IReview"

export interface IMovie {
    _id: string
    imdbId: string
    title: string
    releaseDate: string
    trailerLink: string
    poster: string
    genres: string[]
    backdrops: string[]
    reviewIds: IReview[]
}