import { PitchesCollection } from '@/Notation/Pitches'
import { INotePitch } from '@/Notation/NoteData'
export interface GameState {
  naturalPitches: PitchesCollection,
  alteredPitches: PitchesCollection,
  staffIntervalPitches: PitchesCollection,
  activePitch: INotePitch | null
}
