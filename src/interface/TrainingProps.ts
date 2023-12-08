import { TrainingInterface } from "./TrainingInterface";

export type TrainingProps = {
    training: TrainingInterface;
    removeTraining: (date: string) => void
}