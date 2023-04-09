export interface Stage {
    stage_id: number,
    documents: {
      name: string,
      path: string,
      exts: string
    }[],
    photos: [],
    name: string,
    desc: string,
    limit_date: Date,
    current_date:   Date,
    status: string,
    responsibles: string
}
