import type { SliceSimulatorParams } from "@slicemachine/adapter-next/simulator";

import { SliceSimulator, getSlices } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

export default async function SliceSimulatorPage({ searchParams }: SliceSimulatorParams) {
  const { state } = await searchParams;
  const slices = getSlices(state);

  return (
    <SliceSimulator>
      <SliceZone components={components} slices={slices} />
    </SliceSimulator>
  );
}
