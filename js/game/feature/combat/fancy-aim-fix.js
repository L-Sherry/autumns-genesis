ig.module("game.feature.combat.fancy-aim-fix").requires(
    "game.feature.combat.combat-action-steps"
).defines(function() {
    ig.ACTION_STEP.FANCY_AIM.inject({
        start: function(a) {
            a.getTarget() && this.parent(a);
        },
        run: function(a) {
            var b = a.stepData.throwDir,
                c = a.stepData.sidePos,
                d = a.getTarget();
            return !d || this.parent(a);
        }
    });
});