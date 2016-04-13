/** This file contains the structure for each Phase. Phases randomly choose from an array
    of scrambled trial orders, as defined in stimInfo. This is to allow extra layers of
    randomness into the experiment.
*/
//Phase object
function Phase(phaseName, trials, stim_types, instruction, special_instruction) {
	this.phaseName = phaseName;

	//Integer representing trial length
	this.trials = trials;

	//Matrix with list of stim_types used in this phase
	this.stim_types = stim_types;
}

var phaseChoice = Math.floor((Math.random() * 3) + 1);

if (phaseChoice == 1) {
	var practice1 = new Phase("practice1", 20, [[Stim1,1], [Stim1,1], [Stim1,0], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,0], [Stim1,1], [Stim1,0], [Stim1,1], [Stim1,1], [Stim1,0], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1]]);
	var practice2 = new Phase("practice2", 20, [[Stim2,1], [Stim2,1], [Stim2,0], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,0], [Stim2,0], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,0], [Stim2,1], [Stim2,0]]); 
	var learning = new Phase("learning", 80, [[Stim1,1], [Stim2,0], [Stim3,1], [Stim1,1], [Stim2,0], [Stim1,1], [Stim4,0], [Stim2,1], [Stim4,0], [Stim3,1], [Stim1,1], [Stim1,1], [Stim3,1], [Stim2,1], [Stim1,0], [Stim2,0], [Stim4,0], [Stim1,1], [Stim2,0], [Stim4,1], [Stim4,1], [Stim3,0], [Stim2,1], [Stim1,1], [Stim3,1], [Stim2,0], [Stim1,0], [Stim4,1], [Stim4,1], [Stim2,1], [Stim2,1], [Stim3,1], [Stim4,0], [Stim3,0], [Stim1,0], [Stim4,1], [Stim1,1], [Stim4,1], [Stim2,1], [Stim1,1], [Stim2,1], [Stim3,0], [Stim4,1], [Stim1,1], [Stim2,1], [Stim4,0], [Stim1,0], [Stim1,1], [Stim2,0], [Stim3,0], [Stim4,1], [Stim4,1], [Stim2,0], [Stim2,0], [Stim2,1], [Stim4,0], [Stim3,0], [Stim3,1], [Stim3,1], [Stim3,1], [Stim2,1], [Stim2,0], [Stim3,0], [Stim1,1], [Stim1,0], [Stim4,0], [Stim2,0], [Stim2,1], [Stim4,0], [Stim4,1], [Stim1,1], [Stim1,1], [Stim3,0], [Stim3,0], [Stim3,1], [Stim3,0], [Stim1,1], [Stim3,1], [Stim1,0], [Stim4,1], [Stim3,0], [Stim3,1], [Stim4,0], [Stim4,0]]);
	var test0 = new Phase("test0", 20, [[Stim6,0], [Stim8,0], [Stim5,1], [Stim8,0], [Stim5,1], [Stim6,0], [Stim5,1], [Stim9,0], [Stim8,0], [Stim7,1], [Stim7,1], [Stim6,0], [Stim8,0], [Stim5,1], [Stim7,1], [Stim9,0], [Stim9,0], [Stim7,1], [Stim9,0], [Stim6,0], [Stim5,1], [Stim6,0], [Stim9,0], [Stim7,1], [Stim8,0]]);
	var overlearn1 = new Phase("overlearn1", 120, [[Stim3,0], [Stim2,0], [Stim1,1], [Stim2,0], [Stim1,1], [Stim4,1], [Stim1,1], [Stim1,1], [Stim4,0], [Stim2,1], [Stim4,0], [Stim3,1], [Stim4,0], [Stim2,1], [Stim3,0], [Stim3,0], [Stim3,1], [Stim3,1], [Stim1,1], [Stim1,0], [Stim4,1], [Stim2,1], [Stim2,0], [Stim4,1], [Stim4,1], [Stim3,0], [Stim1,0], [Stim4,1], [Stim4,0], [Stim2,1], [Stim4,0], [Stim4,1], [Stim3,1], [Stim1,1], [Stim2,1], [Stim3,1], [Stim1,0], [Stim1,1], [Stim2,0], [Stim4,0], [Stim3,0], [Stim1,1], [Stim2,1], [Stim2,0], [Stim2,0], [Stim1,1], [Stim2,1], [Stim1,0], [Stim4,1], [Stim4,1], [Stim3,1], [Stim2,1], [Stim1,0], [Stim1,1], [Stim2,1], [Stim3,0], [Stim2,1], [Stim4,0], [Stim1,1], [Stim4,0], [Stim3,0], [Stim3,0], [Stim2,1], [Stim2,0], [Stim3,0], [Stim4,1], [Stim1,0], [Stim3,1], [Stim1,0], [Stim3,0], [Stim1,0], [Stim1,0], [Stim2,1], [Stim3,0], [Stim2,1], [Stim1,1], [Stim1,1], [Stim1,0], [Stim3,1], [Stim2,1], [Stim2,1], [Stim3,1], [Stim4,0], [Stim2,1], [Stim3,0], [Stim4,0], [Stim1,0], [Stim3,1], [Stim4,1], [Stim3,1], [Stim1,0], [Stim3,0], [Stim4,1], [Stim1,1], [Stim2,0], [Stim4,1], [Stim1,1], [Stim4,0], [Stim1,1], [Stim4,1], [Stim4,1], [Stim1,1], [Stim3,1], [Stim2,0], [Stim4,1], [Stim3,1], [Stim3,0], [Stim2,0], [Stim2,0], [Stim4,1], [Stim4,0], [Stim2,0], [Stim4,0], [Stim3,0], [Stim2,1], [Stim1,0], [Stim3,1], [Stim4,1], [Stim4,1], [Stim2,1], [Stim3,0], [Stim3,1], [Stim1,1], [Stim2,0]]);
	var test1 = new Phase("test1", 20, [[Stim14,1], [Stim12,0], [Stim13,0], [Stim11,1], [Stim14,1], [Stim11,1], [Stim13,0], [Stim11,1], [Stim11,1], [Stim14,1], [Stim12,0], [Stim14,1], [Stim11,1], [Stim10,0], [Stim10,0], [Stim10,0], [Stim12,0], [Stim14,1], [Stim10,0], [Stim10,0], [Stim13,0], [Stim13,0], [Stim13,0], [Stim12,0], [Stim12,0]]);
	var overlearn2 = new Phase("overlearn2", 120, [[Stim2,0], [Stim4,1], [Stim2,1], [Stim4,0], [Stim3,1], [Stim2,0], [Stim1,0], [Stim1,1], [Stim1,1], [Stim3,0], [Stim2,1], [Stim2,0], [Stim4,0], [Stim4,1], [Stim3,1], [Stim1,0], [Stim2,1], [Stim4,1], [Stim3,0], [Stim1,0], [Stim4,0], [Stim2,0], [Stim2,1], [Stim3,0], [Stim3,1], [Stim1,0], [Stim3,1], [Stim4,1], [Stim1,0], [Stim2,1], [Stim2,1], [Stim4,0], [Stim3,0], [Stim2,0], [Stim3,0], [Stim2,1], [Stim1,1], [Stim2,0], [Stim4,1], [Stim2,0], [Stim1,1], [Stim4,1], [Stim1,0], [Stim3,1], [Stim4,0], [Stim1,0], [Stim4,1], [Stim1,0], [Stim3,0], [Stim4,1], [Stim3,1], [Stim2,1], [Stim1,0], [Stim3,0], [Stim3,0], [Stim2,0], [Stim2,1], [Stim1,1], [Stim2,0], [Stim3,1], [Stim4,1], [Stim3,1], [Stim3,1], [Stim4,1], [Stim1,0], [Stim1,0], [Stim3,0], [Stim2,1], [Stim4,1], [Stim3,1], [Stim1,1], [Stim2,1], [Stim4,1], [Stim1,1], [Stim3,0], [Stim1,0], [Stim4,0], [Stim4,1], [Stim3,1], [Stim2,1], [Stim3,1], [Stim4,1], [Stim4,0], [Stim4,0], [Stim1,1], [Stim3,1], [Stim3,1], [Stim2,0], [Stim4,1], [Stim4,0], [Stim2,0], [Stim3,1], [Stim1,0], [Stim1,1], [Stim2,1], [Stim4,1], [Stim4,1], [Stim4,0], [Stim2,1], [Stim3,0], [Stim2,1], [Stim3,1], [Stim4,0], [Stim1,1], [Stim1,1], [Stim2,0], [Stim2,0], [Stim1,1], [Stim2,0], [Stim1,1], [Stim3,0], [Stim3,0], [Stim4,1], [Stim1,0], [Stim1,0], [Stim1,1], [Stim2,0], [Stim1,0], [Stim4,1], [Stim1,1], [Stim3,1], [Stim2,0], [Stim4,1], [Stim3,0]]);
	var test2 = new Phase("test2", 20, [[Stim17,0], [Stim18,0], [Stim19,1], [Stim16,1], [Stim16,1], [Stim15,0], [Stim19,1], [Stim15,0], [Stim16,1], [Stim19,1], [Stim18,0], [Stim18,0], [Stim18,0], [Stim16,1], [Stim15,0], [Stim17,0], [Stim17,0], [Stim19,1], [Stim17,0], [Stim19,1], [Stim15,0], [Stim16,1], [Stim17,0], [Stim15,0], [Stim18,0]]);
} else if (phaseChoice == 2) {
	var practice1 = new Phase("practice1", 20, [[Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,0], [Stim1,1], [Stim1,0], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1]]);
	var practice2 = new Phase("practice2", 20, [[Stim2,1], [Stim2,0], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,0], [Stim2,0], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,0], [Stim2,1], [Stim2,0], [Stim2,1], [Stim2,1], [Stim2,0]]); 
	var learning = new Phase("learning", 80, [[Stim4,1], [Stim3,1], [Stim3,0], [Stim3,1], [Stim4,1], [Stim4,1], [Stim2,0], [Stim2,1], [Stim3,1], [Stim3,0], [Stim2,0], [Stim1,1], [Stim4,0], [Stim3,0], [Stim2,0], [Stim1,0], [Stim3,0], [Stim1,0], [Stim2,1], [Stim3,0], [Stim1,0], [Stim3,1], [Stim2,1], [Stim4,0], [Stim4,1], [Stim1,1], [Stim4,1], [Stim4,1], [Stim3,0], [Stim3,0], [Stim2,1], [Stim4,0], [Stim4,1], [Stim4,1], [Stim1,0], [Stim2,0], [Stim1,0], [Stim4,0], [Stim1,1], [Stim1,1], [Stim3,0], [Stim1,1], [Stim4,0], [Stim4,1], [Stim1,0], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,0], [Stim2,1], [Stim2,0], [Stim1,0], [Stim3,0], [Stim4,1], [Stim2,1], [Stim1,1], [Stim3,1], [Stim1,0], [Stim1,1], [Stim3,1], [Stim1,0], [Stim1,0], [Stim4,0], [Stim4,1], [Stim1,1], [Stim2,1], [Stim3,0], [Stim4,0], [Stim3,1], [Stim3,0], [Stim4,0], [Stim2,0], [Stim3,1], [Stim1,1], [Stim2,1], [Stim4,0], [Stim2,0], [Stim2,1], [Stim1,1], [Stim3,0], [Stim2,0], [Stim1,1], [Stim4,0], [Stim3,0]]);
	var test0 = new Phase("test0", 20, [[Stim7,1], [Stim5,1], [Stim8,0], [Stim7,1], [Stim9,0], [Stim7,1], [Stim6,0], [Stim9,0], [Stim5,1], [Stim6,0], [Stim5,1], [Stim9,0], [Stim7,1], [Stim5,1], [Stim6,0], [Stim7,1], [Stim9,0], [Stim8,0], [Stim9,0], [Stim8,0], [Stim8,0], [Stim6,0], [Stim8,0], [Stim5,1], [Stim6,0]]);
	var overlearn1 = new Phase("overlearn1", 120, [[Stim1,1], [Stim1,0], [Stim1,1], [Stim3,1], [Stim3,0], [Stim2,0], [Stim3,0], [Stim4,1], [Stim1,1], [Stim3,0], [Stim2,1], [Stim2,1], [Stim1,1], [Stim2,0], [Stim4,0], [Stim4,1], [Stim3,0], [Stim1,0], [Stim1,0], [Stim1,1], [Stim1,1], [Stim3,0], [Stim3,1], [Stim4,0], [Stim1,1], [Stim4,1], [Stim3,0], [Stim1,0], [Stim2,0], [Stim2,0], [Stim3,1], [Stim3,0], [Stim3,0], [Stim4,0], [Stim3,1], [Stim4,0], [Stim1,0], [Stim2,1], [Stim2,0], [Stim4,1], [Stim4,0], [Stim1,1], [Stim2,1], [Stim4,1], [Stim4,0], [Stim2,1], [Stim3,0], [Stim2,0], [Stim3,0], [Stim2,1], [Stim4,1], [Stim3,1], [Stim4,1], [Stim1,0], [Stim2,0], [Stim4,0], [Stim2,1], [Stim1,0], [Stim1,1], [Stim3,1], [Stim1,1], [Stim1,0], [Stim3,1], [Stim4,1], [Stim1,1], [Stim1,1], [Stim1,0], [Stim2,0], [Stim3,0], [Stim3,1], [Stim2,1], [Stim2,0], [Stim3,0], [Stim2,0], [Stim1,0], [Stim2,1], [Stim3,0], [Stim4,0], [Stim3,0], [Stim1,0], [Stim3,1], [Stim1,0], [Stim4,1], [Stim4,0], [Stim2,1], [Stim1,0], [Stim2,0], [Stim2,0], [Stim3,1], [Stim4,0], [Stim4,1], [Stim4,0], [Stim1,0], [Stim3,1], [Stim3,1], [Stim3,0], [Stim4,0], [Stim4,1], [Stim2,0], [Stim3,1], [Stim3,1], [Stim1,1], [Stim2,1], [Stim4,0], [Stim2,1], [Stim2,1], [Stim1,0], [Stim3,1], [Stim4,1], [Stim1,1], [Stim2,1], [Stim4,1], [Stim4,1], [Stim4,1], [Stim2,1], [Stim3,1], [Stim2,1], [Stim4,0], [Stim2,1], [Stim2,1], [Stim4,0], [Stim1,0], [Stim4,1], [Stim1,1]]);
	var test1 = new Phase("test1", 20, [[Stim12,0], [Stim14,1], [Stim11,1], [Stim14,1], [Stim13,0], [Stim13,0], [Stim12,0], [Stim12,0], [Stim11,1], [Stim11,1], [Stim13,0], [Stim12,0], [Stim14,1], [Stim13,0], [Stim11,1], [Stim14,1], [Stim10,0], [Stim13,0], [Stim11,1], [Stim10,0], [Stim12,0], [Stim14,1], [Stim10,0], [Stim10,0], [Stim10,0]]);
	var overlearn2 = new Phase("overlearn2", 120, [[Stim4,1], [Stim2,1], [Stim4,1], [Stim3,1], [Stim1,0], [Stim3,0], [Stim3,1], [Stim3,1], [Stim4,0], [Stim1,1], [Stim1,1], [Stim4,1], [Stim2,0], [Stim1,0], [Stim4,1], [Stim4,0], [Stim4,1], [Stim2,0], [Stim4,0], [Stim1,1], [Stim2,1], [Stim4,1], [Stim2,0], [Stim3,0], [Stim4,1], [Stim2,0], [Stim1,0], [Stim1,0], [Stim2,1], [Stim4,1], [Stim1,1], [Stim1,1], [Stim2,0], [Stim4,0], [Stim2,1], [Stim3,0], [Stim3,1], [Stim2,0], [Stim2,0], [Stim1,1], [Stim4,0], [Stim1,1], [Stim2,1], [Stim4,0], [Stim2,0], [Stim1,0], [Stim1,1], [Stim4,1], [Stim3,0], [Stim4,0], [Stim2,1], [Stim3,1], [Stim2,0], [Stim4,0], [Stim2,0], [Stim2,1], [Stim2,0], [Stim4,1], [Stim4,0], [Stim3,0], [Stim3,0], [Stim1,0], [Stim2,1], [Stim3,0], [Stim3,1], [Stim1,0], [Stim4,0], [Stim3,1], [Stim2,1], [Stim2,0], [Stim1,0], [Stim1,0], [Stim3,1], [Stim3,1], [Stim3,0], [Stim4,0], [Stim3,0], [Stim2,0], [Stim2,0], [Stim1,1], [Stim4,0], [Stim1,1], [Stim4,1], [Stim3,0], [Stim4,0], [Stim2,0], [Stim1,1], [Stim4,0], [Stim1,0], [Stim3,1], [Stim2,0], [Stim2,1], [Stim3,1], [Stim2,0], [Stim3,1], [Stim1,0], [Stim1,0], [Stim2,0], [Stim3,0], [Stim1,1], [Stim1,1], [Stim4,1], [Stim3,0], [Stim3,1], [Stim3,1], [Stim1,0], [Stim1,1], [Stim3,0], [Stim2,0], [Stim4,1], [Stim4,0], [Stim3,1], [Stim1,0], [Stim4,1], [Stim1,0], [Stim2,0], [Stim1,0], [Stim3,0], [Stim4,0], [Stim3,0], [Stim1,1], [Stim2,1], [Stim3,1], [Stim4,1]]);
	var test2 = new Phase("test2", 20, [[Stim18,0], [Stim19,1], [Stim15,0], [Stim15,0], [Stim16,1], [Stim19,1], [Stim18,0], [Stim17,0], [Stim15,0], [Stim18,0], [Stim17,0], [Stim16,1], [Stim15,0], [Stim16,1], [Stim15,0], [Stim17,0], [Stim19,1], [Stim17,0], [Stim19,1], [Stim17,0], [Stim18,0], [Stim16,1], [Stim16,1], [Stim19,1], [Stim18,0]]);
} else {
	var practice1 = new Phase("practice1", 20, [[Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,0], [Stim1,1], [Stim1,0], [Stim1,0], [Stim1,1], [Stim1,0], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,0], [Stim1,1], [Stim1,1], [Stim1,1], [Stim1,0], [Stim1,1]]);
	var practice2 = new Phase("practice2", 20, [[Stim2,0], [Stim2,0], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,0], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,1], [Stim2,0], [Stim2,1], [Stim2,0], [Stim2,1], [Stim2,1]]); 
	var learning = new Phase("learning", 80, [[Stim2,0], [Stim4,1], [Stim2,0], [Stim3,1], [Stim2,0], [Stim3,1], [Stim2,0], [Stim3,0], [Stim1,1], [Stim2,1], [Stim1,0], [Stim1,1], [Stim3,0], [Stim3,1], [Stim3,0], [Stim4,1], [Stim1,0], [Stim1,1], [Stim2,0], [Stim2,1], [Stim4,0], [Stim2,0], [Stim1,0], [Stim2,1], [Stim1,1], [Stim3,1], [Stim4,0], [Stim1,0], [Stim3,0], [Stim4,0], [Stim3,1], [Stim1,0], [Stim4,0], [Stim1,1], [Stim3,0], [Stim1,1], [Stim3,0], [Stim3,1], [Stim2,1], [Stim2,0], [Stim4,1], [Stim2,0], [Stim3,1], [Stim4,1], [Stim2,1], [Stim4,0], [Stim1,0], [Stim1,0], [Stim3,1], [Stim3,0], [Stim2,1], [Stim1,0], [Stim2,0], [Stim2,1], [Stim1,1], [Stim4,1], [Stim4,1], [Stim4,0], [Stim1,1], [Stim2,0], [Stim3,0], [Stim3,0], [Stim4,0], [Stim4,1], [Stim4,1], [Stim4,1], [Stim1,0], [Stim4,0], [Stim4,1], [Stim1,0], [Stim1,0], [Stim2,1], [Stim3,0], [Stim3,0], [Stim4,1], [Stim3,0], [Stim1,1], [Stim3,1], [Stim4,0], [Stim4,0], [Stim2,1], [Stim2,1], [Stim2,0], [Stim1,1]]);
	var test0 = new Phase("test0", 20, [[Stim6,0], [Stim9,0], [Stim6,0], [Stim7,1], [Stim8,0], [Stim7,1], [Stim6,0], [Stim6,0], [Stim5,1], [Stim7,1], [Stim5,1], [Stim7,1], [Stim5,1], [Stim8,0], [Stim9,0], [Stim9,0], [Stim5,1], [Stim5,1], [Stim8,0], [Stim8,0], [Stim9,0], [Stim9,0], [Stim6,0], [Stim8,0], [Stim7,1]]);
	var overlearn1 = new Phase("overlearn1", 120, [[Stim3,0], [Stim2,0], [Stim3,1], [Stim2,0], [Stim4,1], [Stim2,0], [Stim3,0], [Stim3,1], [Stim4,1], [Stim3,1], [Stim2,1], [Stim4,1], [Stim3,1], [Stim2,0], [Stim1,0], [Stim2,0], [Stim3,0], [Stim1,1], [Stim4,0], [Stim3,1], [Stim1,1], [Stim2,0], [Stim4,1], [Stim1,0], [Stim1,0], [Stim1,1], [Stim2,1], [Stim4,0], [Stim4,0], [Stim4,0], [Stim4,0], [Stim3,1], [Stim3,0], [Stim1,1], [Stim3,0], [Stim2,1], [Stim1,0], [Stim3,0], [Stim4,1], [Stim1,1], [Stim2,0], [Stim3,1], [Stim4,0], [Stim4,0], [Stim3,1], [Stim2,1], [Stim4,0], [Stim1,0], [Stim2,0], [Stim1,0], [Stim1,1], [Stim2,1], [Stim2,0], [Stim3,1], [Stim1,0], [Stim2,0], [Stim2,1], [Stim2,0], [Stim2,0], [Stim4,0], [Stim4,1], [Stim2,1], [Stim4,1], [Stim1,0], [Stim4,1], [Stim4,0], [Stim1,0], [Stim2,0], [Stim1,0], [Stim3,0], [Stim3,1], [Stim2,1], [Stim1,1], [Stim2,0], [Stim1,0], [Stim3,0], [Stim1,0], [Stim4,0], [Stim1,0], [Stim3,1], [Stim1,0], [Stim4,1], [Stim4,0], [Stim1,0], [Stim4,0], [Stim3,1], [Stim3,1], [Stim3,1], [Stim2,1], [Stim4,0], [Stim4,0], [Stim1,0], [Stim3,0], [Stim1,0], [Stim1,1], [Stim3,0], [Stim4,1], [Stim3,0], [Stim1,0], [Stim3,0], [Stim2,1], [Stim2,1], [Stim4,0], [Stim4,1], [Stim3,1], [Stim1,1], [Stim4,0], [Stim2,1], [Stim1,0], [Stim3,1], [Stim1,0], [Stim2,0], [Stim1,0], [Stim2,1], [Stim1,1], [Stim4,1], [Stim4,0], [Stim2,1], [Stim3,1], [Stim2,0], [Stim3,1], [Stim2,0], [Stim4,0], [Stim3,0]]);
	var test1 = new Phase("test1", 20, [[Stim13,0], [Stim10,0], [Stim13,0], [Stim13,0], [Stim11,1], [Stim14,1], [Stim14,1], [Stim11,1], [Stim13,0], [Stim12,0], [Stim10,0], [Stim11,1], [Stim10,0], [Stim13,0], [Stim11,1], [Stim10,0], [Stim10,0], [Stim14,1], [Stim12,0], [Stim12,0], [Stim11,1], [Stim14,1], [Stim14,1], [Stim12,0], [Stim12,0]]);
	var overlearn2 = new Phase("overlearn2", 120, [[Stim1,0], [Stim3,0], [Stim3,0], [Stim4,0], [Stim2,0], [Stim3,1], [Stim2,1], [Stim2,0], [Stim2,0], [Stim3,1], [Stim3,1], [Stim4,1], [Stim2,1], [Stim4,1], [Stim2,1], [Stim3,0], [Stim1,1], [Stim2,1], [Stim2,1], [Stim4,1], [Stim4,1], [Stim1,0], [Stim2,1], [Stim3,1], [Stim1,0], [Stim3,0], [Stim4,0], [Stim4,1], [Stim2,0], [Stim1,1], [Stim2,1], [Stim4,0], [Stim4,0], [Stim1,1], [Stim3,0], [Stim2,0], [Stim4,1], [Stim1,0], [Stim3,0], [Stim1,1], [Stim4,1], [Stim4,1], [Stim1,1], [Stim2,1], [Stim4,0], [Stim4,1], [Stim1,1], [Stim4,0], [Stim3,1], [Stim1,1], [Stim3,1], [Stim2,1], [Stim3,0], [Stim1,0], [Stim4,0], [Stim3,0], [Stim4,1], [Stim1,0], [Stim1,0], [Stim2,0], [Stim2,1], [Stim2,0], [Stim2,1], [Stim4,0], [Stim3,0], [Stim4,0], [Stim2,0], [Stim4,1], [Stim3,1], [Stim3,0], [Stim3,1], [Stim3,1], [Stim1,1], [Stim2,1], [Stim3,1], [Stim3,1], [Stim3,0], [Stim2,0], [Stim1,1], [Stim1,0], [Stim3,1], [Stim2,0], [Stim3,1], [Stim2,0], [Stim1,0], [Stim2,0], [Stim2,0], [Stim2,0], [Stim1,1], [Stim4,0], [Stim4,1], [Stim2,0], [Stim1,0], [Stim4,0], [Stim3,0], [Stim4,0], [Stim3,0], [Stim4,1], [Stim1,0], [Stim4,1], [Stim3,0], [Stim4,1], [Stim4,0], [Stim2,0], [Stim2,1], [Stim1,0], [Stim1,1], [Stim4,0], [Stim4,1], [Stim1,0], [Stim1,0], [Stim2,0], [Stim3,1], [Stim1,0], [Stim3,1], [Stim1,0], [Stim4,0], [Stim3,0], [Stim1,0], [Stim3,0], [Stim1,0], [Stim1,1], [Stim2,0], [Stim1,0]]);
	var test2 = new Phase("test2", 20, [[Stim19,1], [Stim19,1], [Stim17,0], [Stim18,0], [Stim15,0], [Stim16,1], [Stim18,0], [Stim15,0], [Stim18,0], [Stim17,0], [Stim19,1], [Stim16,1], [Stim18,0], [Stim16,1], [Stim17,0], [Stim19,1], [Stim16,1], [Stim16,1], [Stim19,1], [Stim15,0], [Stim17,0], [Stim15,0], [Stim17,0], [Stim15,0], [Stim18,0]]);
};

var preTest0 = new Phase("preTest0", 30, [[Stim7,1], [Stim7,1], [Stim5,1], [Stim5,1], [Stim5,1], [Stim7,1], [Stim7,1], [Stim5,1], [Stim7,1], [Stim5,1], [Stim7,1], [Stim5,1], [Stim7,1], [Stim5,1], [Stim5,1], [Stim5,1], [Stim7,1], [Stim7,1], [Stim5,1], [Stim7,1], [Stim5,1], [Stim7,1], [Stim5,1], [Stim5,1], [Stim7,1], [Stim7,1], [Stim5,1], [Stim7,1], [Stim7,1], [Stim5,1], [Stim5,1], [Stim7,1]]);
var preTest1 = new Phase("preTest1", 30, [[Stim12,0], [Stim12,0], [Stim12,0], [Stim10,0], [Stim10,0], [Stim10,0], [Stim10,0], [Stim12,0], [Stim10,0], [Stim12,0], [Stim10,0], [Stim10,0], [Stim10,0], [Stim12,0], [Stim10,0], [Stim10,0], [Stim10,0], [Stim12,0], [Stim12,0], [Stim12,0], [Stim12,0], [Stim10,0], [Stim10,0], [Stim12,0], [Stim12,0], [Stim10,0], [Stim10,0], [Stim12,0], [Stim12,0], [Stim12,0], [Stim10,0], [Stim12,0]]);
var preTest2 = new Phase("preTest2", 30, [[Stim17,0], [Stim17,0], [Stim17,0], [Stim15,0], [Stim17,0], [Stim15,0], [Stim15,0], [Stim15,0], [Stim17,0], [Stim15,0], [Stim17,0], [Stim17,0], [Stim15,0], [Stim17,0], [Stim15,0], [Stim15,0], [Stim15,0], [Stim17,0], [Stim15,0], [Stim15,0], [Stim15,0], [Stim17,0], [Stim17,0], [Stim15,0], [Stim15,0], [Stim17,0], [Stim17,0], [Stim17,0], [Stim17,0], [Stim17,0], [Stim15,0], [Stim15,0]]);
