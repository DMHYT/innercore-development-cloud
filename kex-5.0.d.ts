/// <reference path="./core-engine.d.ts"/>

declare module KEX {

    /**
     * Wrapper for the native `Actor` class to get access
     * to the wide variety of the methods of any entity in the game.
     * @since 1.0
     */
    export class Actor extends java.lang.Object implements INativeInterface {

        /**
         * @returns pointer to the native object wrapped by the following [[Actor]] object,
         * represented by a signed 64-bit integer
         */
        getPointer(): number;

        /**
         * @returns whether the entity with given unique ID currently exists in the world.
         * Use it when you construct [[Actor]] and its subclasses, otherwise
         * you will get a [[java.lang.IllegalArgumentException]] telling you
         * there is no entity with given id.
         * @since 1.0
         */
        static isValid(entityUID: number): boolean;

        /**
         * Constructs new [[Actor]] object from given entity unique ID.
         * Use [[Actor.isValid]] first, to check if entity with this ID exists,
         * or a [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 1.0
         */
        constructor(entity: number);

        /**
         * @since 1.0
         */
        isBreakingObstruction(): boolean;
        
        /**
         * @since 1.0
         */
        setBreakingObstruction(breaking: boolean): void;
        
        /**
         * @since 1.0
         */
        isDancing(): boolean;
        
        /**
         * @since 1.0
         */
        setDancing(dancing: boolean): void;
        
        /**
         * @since 1.0
         */
        healEffects(value: number): void;
        
        /**
         * @since 1.0
         */
        getColor(): number;
        
        /**
         * @since 1.0
         */
        setColor(color: number): void;
        
        /**
         * @since 1.0
         */
        getColor2(): number;
        
        /**
         * @since 1.0
         */
        setColor2(color: number): void;
        
        /**
         * @since 1.0
         */
        isInClouds(): boolean;
        
        /**
         * @since 1.0
         */
        hasUniqueID(): boolean;
        
        /**
         * @since 1.0
         */
        getUniqueID(): number;
        
        /**
         * @since 1.0
         */
        getHurtDir(): number;
        
        /**
         * @since 1.0
         */
        setHurtDir(hurtDir: number): void;
        
        /**
         * @since 1.0
         */
        isEnchanted(): boolean;
        
        /**
         * @since 1.0
         */
        setEnchanted(enchanted: boolean): void;
        
        /**
         * @since 1.0
         */
        getMarkVariant(): number;
        
        /**
         * @since 1.0
         */
        setMarkVariant(variant: number): void;
        
        /**
         * @since 1.0
         */
        hasDimension(): boolean;
        
        /**
         * @since 1.0
         */
        canChangeDimensions(): boolean;
        
        /**
         * @since 1.0
         */
        getDimensionId(): number;
        
        /**
         * @since 1.0
         */
        getDimension(): Nullable<Dimension>;
        
        /**
         * @since 1.0
         */
        wasLastHitByPlayer(): boolean;
        
        /**
         * @since 1.0
         */
        isDelayedAttacking(): boolean;
        
        /**
         * @since 1.0
         */
        setDelayedAttacking(delayed: boolean): void;
        
        /**
         * @since 1.0
         */
        canBeginOrContinueClimbingLadder(): boolean;
        
        /**
         * @since 1.0
         */
        getStructuralIntegrity(): number;
        
        /**
         * @since 1.0
         */
        setStructuralIntegrity(integrity: number): void;
        
        /**
         * @since 1.0
         */
        hasLevel(): boolean;
        
        /**
         * @since 1.0
         */
        getLevel(): Nullable<Level>;
        
        /**
         * @since 1.0
         */
        getCameraDistance(): number;
        
        /**
         * @since 1.0
         */
        setCameraDistance(distance: number): void;
        
        /**
         * @since 1.0
         */
        isDoorOpener(): boolean;
        
        /**
         * @since 1.0
         */
        setDoorOpener(opener: boolean): void;
        
        /**
         * @since 1.0
         */
        hasType(type: number): boolean;
        
        /**
         * @since 1.0
         */
        isType(type: number): boolean;
        
        /**
         * @since 1.0
         */
        removeEffectNoUpdate(id: number): void;
        
        /**
         * @since 1.0
         */
        getEffect(effect: MobEffect): Nullable<MobEffectInstance>;
        
        /**
         * @since 1.0
         */
        getEffect(effectId: number): Nullable<MobEffectInstance>;
        
        /**
         * @since 1.0
         */
        getActiveEffectCount(): number;
        
        /**
         * @since 1.0
         */
        hasEffect(effect: MobEffect): boolean;
        
        /**
         * @since 1.0
         */
        hasEffect(effectId: number): boolean;
        
        /**
         * @since 1.0
         */
        hasAnyVisibleEffects(): boolean;
        
        /**
         * @since 1.0
         */
        removeEffect(id: number): void;
        
        /**
         * @since 1.0
         */
        hasAnyEffects(): boolean;
        
        /**
         * @since 1.0
         */
        removeAllEffects(): void;
        
        /**
         * @since 3.0
         */
        addEffect(effectInstance: MobEffectInstance): void;
        
        /**
         * @since 2.0
         */
        removeEffects(harmful: boolean, harmless: boolean): void;
        
        /**
         * @since 1.0
         */
        isInSnow(): boolean;
        
        /**
         * @since 1.0
         */
        canMate(mate: Actor): boolean;
        
        /**
         * @since 1.0
         */
        hasTickingArea(): boolean;
        
        /**
         * @since 1.0
         */
        getIsOnScreen(): boolean;
        
        /**
         * @since 1.0
         */
        setIsOnScreen(onScreen: boolean): void;
        
        /**
         * @since 1.0
         */
        isOverScaffolding(): boolean;
        
        /**
         * @since 1.0
         */
        isInScaffolding(): boolean;
        
        /**
         * @since 1.0
         */
        shouldOrphan(world: BlockSource): boolean;
        
        /**
         * @since 1.0
         */
        isOrphan(): boolean;
        
        /**
         * @since 1.0
         */
        isPredictedMovementEnabled(): boolean;
        
        /**
         * @since 1.0
         */
        isInRain(): boolean;
        
        /**
         * @since 1.0
         */
        isWASDControlled(): boolean;
        
        /**
         * @since 1.0
         */
        setWASDControlled(wasd: boolean): void;
        
        /**
         * @since 1.0
         */
        hasPriorityAmmunition(): boolean;
        
        /**
         * @since 1.0
         */
        hasRuntimeID(): boolean;
        
        /**
         * @since 1.0
         */
        getVariant(): number;
        
        /**
         * @since 1.0
         */
        setVariant(variant: number): void;
        
        /**
         * @since 1.0
         */
        isRiding(ridden: Actor): boolean;
        
        /**
         * @since 1.0
         */
        isRider(rider: Actor): boolean;
        
        /**
         * @since 1.0
         */
        removeAllRiders(b1: boolean, b2: boolean): void;
        
        /**
         * @since 1.0
         */
        hasPlayerRider(): boolean;
        
        /**
         * @since 1.0
         */
        isRiding(): boolean;
        
        /**
         * @since 1.0
         */
        getRide(): Nullable<Actor>;
        
        /**
         * @since 1.0
         */
        hasRider(): boolean;
        
        /**
         * @since 1.0
         */
        getStatusFlag(flag: number): boolean;
        
        /**
         * @since 1.0
         */
        isChested(): boolean;
        
        /**
         * @since 1.0
         */
        isStackable(): boolean;
        
        /**
         * @since 1.0
         */
        isResting(): boolean;
        
        /**
         * @since 1.0
         */
        setResting(resting: boolean): void;
        
        /**
         * @since 1.0
         */
        getHealth(): number;
        
        /**
         * @since 1.0
         */
        getMaxHealth(): number;
        
        /**
         * @since 1.0
         */
        getControllingSeat(): number;
        
        /**
         * @since 1.0
         */
        setControllingSeat(seat: number): void;
        
        /**
         * @since 1.0
         */
        isInsidePortal(): boolean;
        
        /**
         * @since 1.0
         */
        hasTeleported(): boolean;
        
        /**
         * @since 1.0
         */
        moveRelative(strafe: number, up: number, forward: number, friction: number): void;
        
        /**
         * @since 1.0 [[BlockSource]] is returned
         * @since 3.0 [[KEX.BlockSource]] is returned
         */
        getRegion(): Nullable<KEX.BlockSource>;
        
        /**
         * @since 1.0
         */
        isTame(): boolean;
        
        /**
         * @since 1.0
         */
        isLeashed(): boolean;
        
        /**
         * @since 1.0
         */
        isLeashableType(): boolean;
        
        /**
         * @since 1.0
         */
        isMoving(): boolean;
        
        /**
         * @since 1.0
         */
        setMoving(moving: boolean): void;
        
        /**
         * @since 1.0
         */
        hasTotemEquipped(): boolean;
        
        /**
         * @since 1.0
         */
        isAutonomous(): boolean;
        
        /**
         * @since 1.0
         */
        setAutonomous(auto: boolean): void;
        
        /**
         * @since 1.0
         */
        isPersistent(): boolean;
        
        /**
         * @since 1.0
         */
        removeEntity(): void;
        
        /**
         * @since 1.0
         */
        setCollidableMob(collidable: boolean): void;
        
        /**
         * @since 1.0
         */
        getCollidableMobNear(): boolean;
        
        /**
         * @since 1.0
         */
        setCollidableMobNear(collidable: boolean): void;
        
        /**
         * @since 1.0
         */
        hasFishingHook(): boolean;
        
        /**
         * @since 1.0
         */
        getChainedDamageEffects(): boolean;
        
        /**
         * @since 1.0
         */
        setChainedDamageEffects(chained: boolean): void;
        
        /**
         * @since 1.0
         */
        isPacified(): boolean;
        
        /**
         * @since 1.0
         */
        distanceTo(actor: Actor): number;
        
        /**
         * @since 1.0
         */
        distanceTo(x: number, y: number, z: number): number;
        
        /**
         * @since 1.0
         */
        canCurrentlySwim(): boolean;
        
        /**
         * @since 1.0
         */
        isSwimming(): boolean;
        
        /**
         * @since 1.0
         */
        isSwimmer(): boolean;
        
        /**
         * @since 1.0
         */
        setSwimmer(swimmer: boolean): void;
        
        /**
         * @since 1.0
         */
        hasFamily(family: any_string): boolean;
        
        /**
         * @since 1.0
         */
        hasAttributeBuff(buffType: number): boolean;
        
        /**
         * @since 1.0
         */
        isClientSide(): boolean;
        
        /**
         * @since 1.0
         */
        isControlledByLocalInstance(): boolean;
        
        /**
         * @since 1.0
         */
        isClimbing(): boolean;
        
        /**
         * @since 1.0
         */
        setClimbing(climbing: boolean): void;
        
        /**
         * @since 1.0
         */
        canClimb(): boolean;
        
        /**
         * @since 1.0
         */
        setCanClimb(canClimb: boolean): void;
        
        /**
         * @since 1.0
         */
        getSkinID(): number;
        
        /**
         * @since 1.0
         */
        setSkinID(id: number): void;
        
        /**
         * @since 1.0
         */
        getSpeedInMetersPerSecond(): number;
        
        /**
         * @since 1.0
         */
        getStrength(): number;
        
        /**
         * @since 1.0
         */
        setStrength(strength: number): void;
        
        /**
         * @since 1.0
         */
        getStrengthMax(): number;
        
        /**
         * @since 1.0
         */
        setStrengthMax(strength: number): void;
        
        /**
         * @since 1.0
         */
        getDamageNearbyMobs(): boolean;
        
        /**
         * @since 1.0
         */
        setDamageNearbyMobs(damage: boolean): void;
        
        /**
         * @since 1.0
         */
        isLayingDown(): boolean;
        
        /**
         * @since 1.0
         */
        setLayingDown(laying: boolean): void;
        
        /**
         * @since 1.0
         */
        getTempted(): boolean;
        
        /**
         * @since 1.0
         */
        setTempted(tempted: boolean): void;
        
        /**
         * @since 3.0
         */
        dropTowards(x: number, y: number, z: number, id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 1.0
         */
        isTrading(): boolean;
        
        /**
         * @since 1.0
         */
        inDownwardFlowingLiquid(): boolean;
        
        /**
         * @since 1.0
         */
        getJumpDuration(): number;
        
        /**
         * @since 1.0
         */
        setJumpDuration(dur: number): void;
        
        /**
         * @since 1.0
         */
        isScared(): boolean;
        
        /**
         * @since 1.0
         */
        setScared(scared: boolean): void;
        
        /**
         * @since 1.0
         */
        isSitting(): boolean;
        
        /**
         * @since 1.0
         */
        setSitting(sitting: boolean): void;
        
        /**
         * @since 1.0
         */
        isBaby(): boolean;
        
        /**
         * @since 1.0
         */
        isIgnited(): boolean;
        
        /**
         * @since 1.0
         */
        getLifeSpan(): number;
        
        /**
         * @since 1.0
         */
        setLimitedLife(life: number): void;
        
        /**
         * @since 1.0
         */
        isInvisible(): boolean;
        
        /**
         * @since 1.0
         */
        setInvisible(invisible: boolean): void;
        
        /**
         * @since 1.0
         */
        isInWorld(): boolean;
        
        /**
         * @since 1.0
         */
        isInLove(): boolean;
        
        /**
         * @since 1.0
         */
        setInLove(lover: Actor): void;
        
        /**
         * @since 1.0
         */
        isDoorBreaker(): boolean;
        
        /**
         * @since 1.0
         */
        setDoorBreaker(breaker: boolean): void;
        
        /**
         * @since 1.0
         */
        isWalker(): boolean;
        
        /**
         * @since 1.0
         */
        setWalker(walker: boolean): void;
        
        /**
         * @since 1.0
         */
        isCharged(): boolean;
        
        /**
         * @since 1.0
         */
        setCharged(charged: boolean): void;
        
        /**
         * @since 1.0
         */
        canFly(): boolean;
        
        /**
         * @since 1.0
         */
        setCanFly(canFly: boolean): void;
        
        /**
         * @since 1.0
         */
        isInPrecipitation(): boolean;
        
        /**
         * @since 1.0
         */
        setAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
        
        /**
         * @since 1.0
         */
        isSafeToSleepNear(): boolean;
        
        /**
         * @since 1.0
         */
        setBlockTarget(x: number, y: number, z: number): void;
        
        /**
         * @since 1.0
         */
        isAngry(): boolean;
        
        /**
         * @since 1.0
         */
        isPowered(): boolean;
        
        /**
         * @since 1.0
         */
        setPowered(powered: boolean): void;
        
        /**
         * @since 1.0
         */
        isSheared(): boolean;
        
        /**
         * @since 1.0
         */
        isOutOfControl(): boolean;
        
        /**
         * @since 1.0
         */
        isSneaking(): boolean;
        
        /**
         * @since 1.0
         */
        setSneaking(sneaking: boolean): void;
        
        /**
         * @since 1.0
         */
        getTarget(): Nullable<Actor>;
        
        /**
         * @since 1.0
         */
        setTarget(target: Actor): void;
        
        /**
         * @since 1.0
         */
        setStunned(stunned: boolean): void;
        
        /**
         * @since 1.0
         */
        getTotalAirSupply(): number;
        
        /**
         * @since 1.0
         */
        getAirSupply(): number;
        
        /**
         * @since 1.0
         */
        isInThunderstorm(): boolean;
        
        /**
         * @since 1.0
         */
        isBribed(): boolean;
        
        /**
         * @since 1.0
         */
        isStanding(): boolean;
        
        /**
         * @since 1.0
         */
        setStanding(standing: boolean): void;
        
        /**
         * @since 1.0
         */
        getShakeTime(): number;
        
        /**
         * @since 1.0
         */
        setShakeTime(time: number): void;
        
        /**
         * @since 1.0
         */
        hasCategory(category: number): boolean;
        
        /**
         * @since 1.0
         */
        getVerticalSpeedInMetersPerSecond(): number;
        
        /**
         * @since 1.0
         */
        isTrusting(): boolean;
        
        /**
         * @since 1.0
         */
        getRadius(): number;
        
        /**
         * @since 1.0
         */
        hasComponent(component: any_string): boolean;
        
        /**
         * @since 1.0
         */
        getOnDeathExperience(): number;
        
        /**
         * @since 1.0
         */
        getInterpolatedBodyYaw(partialTicks: number): number;
        
        /**
         * @since 1.0
         */
        getYawSpeedInDegreesPerSecond(): number;
        
        /**
         * @since 1.0
         */
        getInterpolatedWalkAnimSpeed(partialTicks: number): number;
        
        /**
         * @since 1.0
         */
        isFireImmune(): boolean;
        
        /**
         * @since 1.0
         */
        breaksFallingBlocks(): boolean;
        
        /**
         * @since 1.0
         */
        chorusFruitTeleport(x: number, y: number, z: number): void;
        
        /**
         * @since 1.0
         */
        lerpTo(x: number, y: number, z: number, rotX: number, rotY: number): void;
        
        /**
         * @since 1.0
         */
        lerpMotion(x: number, y: number, z: number): void;
        
        /**
         * @since 1.0
         */
        getRidingHeight(): number;
        
        /**
         * @since 1.0
         */
        startRiding(ridden: Actor): void;
        
        /**
         * @since 1.0
         */
        addRider(rider: Actor): void;
        
        /**
         * @since 1.0
         */
        intersects(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
        
        /**
         * @since 1.0
         */
        isFree(x: number, y: number, z: number): boolean;
        
        /**
         * @since 1.0
         */
        isFree(x: number, y: number, z: number, someFloat: number): boolean;
        
        /**
         * @since 1.0
         */
        isInWall(): boolean;
        
        /**
         * @since 1.0
         */
        canShowNameTag(): boolean;
        
        /**
         * @since 1.0
         */
        canExistInPeaceful(): boolean;
        
        /**
         * @since 1.0
         */
        setNameTagVisible(visible: boolean): void;
        
        /**
         * @since 1.0
         */
        getAlwaysShowNameTag(): boolean;
        
        /**
         * @since 1.0
         */
        isInWater(): boolean;
        
        /**
         * @since 1.0
         */
        hasEnteredWater(): boolean;
        
        /**
         * @since 1.0
         */
        isImmersedInWater(): boolean;
        
        /**
         * @since 1.0
         */
        isInWaterOrRain(): boolean;
        
        /**
         * @since 1.0
         */
        isInLava(): boolean;
        
        /**
         * @since 1.0
         */
        isUnderLiquid(materialType: number): boolean;
        
        /**
         * @since 1.0
         */
        isOverWater(): boolean;
        
        /**
         * @since 1.0
         */
        getShadowRadius(): number;
        
        /**
         * @since 1.0
         */
        canSeeInvisible(): boolean;
        
        /**
         * @since 1.0
         */
        canSee(actor: Actor): boolean;
        
        /**
         * @since 1.0
         */
        canSee(x: number, y: number, z: number): boolean;
        
        /**
         * @since 1.0
         */
        isImmobile(): boolean;
        
        /**
         * @since 1.0
         */
        isSilent(): boolean;
        
        /**
         * @since 1.0
         */
        isPickable(): boolean;
        
        /**
         * @since 1.0
         */
        isFishable(): boolean;
        
        /**
         * @since 1.0
         */
        isSleeping(): boolean;
        
        /**
         * @since 1.0
         */
        isShootable(): boolean;
        
        /**
         * @since 1.0
         */
        isBlocking(): boolean;
        
        /**
         * @since 1.0
         */
        isAlive(): boolean;
        
        /**
         * @since 1.0
         */
        isOnFire(): boolean;
        
        /**
         * @since 1.0
         */
        setOnFire(fireTicks: number): void;
        
        /**
         * @since 1.0
         */
        isOnHotBlock(): boolean;
        
        /**
         * @since 1.0
         */
        isCreativeModeAllowed(): boolean;
        
        /**
         * @since 1.0
         */
        isSurfaceMob(): boolean;
        
        /**
         * @since 1.0
         */
        isTargetable(): boolean;
        
        /**
         * @since 1.0
         */
        isLocalPlayer(): boolean;
        
        /**
         * @since 1.0
         */
        isPlayer(): boolean;
        
        /**
         * @since 1.0
         */
        canAttack(victim: Actor, someBool: boolean): boolean;
        
        /**
         * @since 1.0
         */
        isValidTarget(potentialTarget: Actor): boolean;
        
        /**
         * @since 1.0
         */
        attack(victim: Actor): void;
        
        /**
         * @since 1.0
         */
        performRangedAttack(victim: Actor, distanceFactor: number): void;
        
        /**
         * @since 1.0
         */
        getEquipmentCount(): number;
        
        /**
         * @since 1.0
         */
        getInventorySize(): number;
        
        /**
         * @since 1.0
         */
        getEquipSlots(): number;
        
        /**
         * @since 1.0
         */
        getChestSlots(): number;
        
        /**
         * @since 1.0
         */
        canPowerJump(): boolean;
        
        /**
         * @since 1.0
         */
        setCanPowerJump(canPowerJump: boolean): void;
        
        /**
         * @since 1.0
         */
        isJumping(): boolean;
        
        /**
         * @since 1.0
         */
        doFireHurt(amount: number): void;
        
        /**
         * @since 1.0
         */
        onLightningHit(): void;
        
        /**
         * @since 1.0
         */
        feed(amount: number): void;
        
        /**
         * @since 1.0
         */
        getPickRadius(): number;
        
        /**
         * @since 1.0
         */
        getArmor(slot: number): Nullable<ItemInstance>;
        
        /**
         * @since 3.0
         */
        setArmor(slot: number, id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 1.0
         */
        getArmorMaterialTypeInSlot(slot: number): number;
        
        /**
         * @since 1.0
         */
        getArmorMaterialTextureTypeInSlot(slot: number): number;
        
        /**
         * @since 1.0
         */
        getEquippedSlot(slot: number): Nullable<ItemInstance>;
        
        /**
         * @since 3.0
         */
        setEquippedSlot(slot: number, id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 1.0
         */
        getCarriedItem(): Nullable<ItemInstance>;
        
        /**
         * @since 3.0
         */
        setCarriedItem(id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 3.0
         */
        setOffhandSlot(id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 1.0
         */
        consumeTotem(): void;
        
        /**
         * @since 1.0
         */
        getPortalCooldown(): number;
        
        /**
         * @since 1.0
         */
        getPortalWaitTime(): number;
        
        /**
         * @since 1.0
         */
        canBePulledIntoVehicle(): boolean;
        
        /**
         * @since 1.0
         */
        inCaravan(): boolean;
        
        /**
         * @since 1.0
         */
        heal(amount: number): void;
        
        /**
         * @since 1.0
         */
        isInvertedHealAndHarm(): boolean;
        
        /**
         * @since 1.0
         */
        canBeAffected(effectId: number): boolean;
        
        /**
         * @since 3.0
         */
        canBeAffected(effect: MobEffectInstance): boolean;
        
        /**
         * @since 3.0
         */
        canBeAffectedByArrow(effect: MobEffectInstance): boolean;
        
        /**
         * @since 1.0
         */
        swing(): void;
        
        /**
         * @since 1.0
         */
        hasOutputSignal(signal: number): boolean;
        
        /**
         * @since 1.0
         */
        getOutputSignal(): number;
        
        /**
         * @since 1.0
         */
        getRiderYRotation(rider: Actor): number;
        
        /**
         * @since 1.0
         */
        isWorldBuilder(): boolean;
        
        /**
         * @since 1.0
         */
        isCreative(): boolean;
        
        /**
         * @since 1.0
         */
        isAdventure(): boolean;
        
        /**
         * @since 3.0
         */
        add(id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 3.0
         */
        drop(id: number, count: number, data: number, extra: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>, someBool: boolean): void;
        
        /**
         * @since 1.0
         */
        setAuxValue(aux: number): void;
        
        /**
         * @since 1.0
         */
        wobble(): void;
        
        /**
         * @since 1.0
         */
        hasHurt(): boolean;
        
        /**
         * @since 1.0
         */
        startSpinAttack(): void;
        
        /**
         * @since 1.0
         */
        stopSpinAttack(): void;
        
        /**
         * @since 1.0
         */
        kill(): void;
        
        /**
         * @since 1.0
         */
        shouldTryMakeStepSound(): boolean;
        
        /**
         * @since 1.0
         */
        canMakeStepSound(): boolean;
        
        /**
         * @since 1.0
         */
        outOfWorld(): boolean;
        
        /**
         * @since 1.0
         */
        pushOutOfBlocks(x: number, y: number, z: number): void;
        
        /**
         * @since 1.0
         */
        doWaterSplashEffect(): void;
        
        /**
         * @since 1.0
         */
        spawnTrailBubbles(): void;
        
        /**
         * @since 2.0
         */
        isOnGround(): boolean;
        
        /**
         * @since 3.0
         */
        calculateAttackDamage(victim: number | Actor): number;
        
        /**
         * @since 3.0
         */
        calculateAttackDamage(id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>, victim?: number | Actor): number;
        
        /**
         * @since 2.0
         */
        canBreatheAir(): boolean;
        
        /**
         * @since 2.0
         */
        canBreatheWater(): boolean;
        
        /**
         * @since 2.0
         */
        canBreatheLava(): boolean;
        
        /**
         * @since 2.0
         */
        canBreatheSolids(): boolean;
        
        /**
         * @since 2.0
         */
        generatesBubbles(): boolean;
        
        /**
         * @since 2.0
         */
        getInhaleTime(): number;
        
        /**
         * @since 2.0
         */
        getSuffocateTime(): number;
        
        /**
         * @since 2.0
         */
        setAirSupply(supply: number): void;
        
        /**
         * @since 2.0
         */
        getMaxAirSupply(): number;
        
        /**
         * @since 2.0
         */
        setMaxAirSupply(supply: number): void;
        
        /**
         * @since 2.0
         */
        getAirRegenPerTick(): number;
        
        /**
         * @since 1.4
         */
        isElytraFlying(): boolean;
        
        /**
         * @since 1.0
         */
        isMob(): boolean;
        
        /**
         * @since 1.0
         */
        asMob(): Nullable<Mob>;

        /**
         * @since 2.0
         */
        asPlayer(): Nullable<Player>;

        /**
         * @since 2.0
         */
        asLocalPlayer(): Nullable<LocalPlayer>;

    }

}
declare module KEX {

    /**
     * Wrapper for the native `ActorDamageSource` class to get access
     * to the circumstances of an entity damage event.
     * @since 3.0
     */
    export interface ActorDamageSource extends INativeInterface {
        
        /**
         * @returns whether the victim entity was damaged by another entity
         * @since 3.0
         */
        isEntitySource(): boolean;
        
        /**
         * @returns whether the victim entity was damaged by an entity
         * that had come from another entity, for example, an arrow or another projectile from a player
         * @since 3.0
         */
        isChildEntitySource(): boolean;
        
        /**
         * @returns whether the victim entity was damaged by a specific block in the world,
         * for example, magma or cactus
         * @since 3.0
         */
        isBlockSource(): boolean;
        
        /**
         * @returns whether the victim entity is in creative mode
         * @since 3.0
         */
        isEntityCreative(): boolean;
        
        /**
         * @returns whether the victim entity can place and break blocks in the world
         * @since 3.0
         */
        isEntityWorldBuilder(): boolean;
        
        /**
         * @returns victim entity's unique ID
         * @since 3.0
         */
        getEntityUniqueID(): number;
        
        /**
         * @returns victim entity's numeric type
         * @since 3.0
         */
        getEntityType(): number;
        
        /**
         * @since 3.0
         */
        getEntityCategories(): number;
        
        /**
         * @returns victim entity as an [[Actor]] object, or null
         * if couldn't get the victim entity for some reason
         * @since 3.0
         */
        getEntity(): Nullable<Actor>;
        
        /**
         * @returns whether the attacker entity is in creative mode
         * @since 3.0
         */
        isDamagingEntityCreative(): boolean;
        
        /**
         * @returns whether the attacker entity can place and break blocks in the world
         * @since 3.0
         */
        isDamagingEntityWorldBuilder(): boolean;
        
        /**
         * @returns attacker entity's unique ID
         * @since 3.0
         */
        getDamagingEntityUniqueID(): number;
        
        /**
         * @returns attacker entity's numeric type
         * @since 3.0
         */
        getDamagingEntityType(): number;
        
        /**
         * @since 3.0
         */
        getDamagingEntityCategories(): number;
        
        /**
         * @returns attacker entity as an [[Actor]] object, or null if
         * the victim entity was not attacked by another entity
         * @since 3.0
         */
        getDamagingEntity(): Nullable<Actor>;
        
        /**
         * @returns numeric ID of the damage cause
         * @since 3.0
         */
        getCause(): number;
        
        /**
         * Sets numeric ID of the damage cause
         * @since 3.0
         */
        setCause(cause: number): void;
        
        /**
         * @returns block that damaged the victim entity as a [[BlockState]] object,
         * or null if the victim entity was not attacked by a block
         * @since 3.0
         */
        getBlock(): Nullable<BlockState>;

    }

}
declare module KEX {

    /**
     * Small module to convert numeric item and block IDs to string identifiers
     * used, for example, in addons
     * @since 1.3
     */
    export module AddonUtils {

        /**
         * @returns string identifier in format `"minecraft:identifier"`
         * of the item by given numeric ID
         * @since 1.3
         */
        export function getAddonItemIdentifier(id: number): jstring;

        /**
         * @returns string identifier of the block by given numeric ID, or null if
         * the block with given ID was not found
         * @since 1.3
         */
        export function getBlockNameId(id: number): Nullable<jstring>;

        /**
         * @returns numeric ID of the item by given string identifier.
         * The identifier must be without `"namespace:"` (`"minecraft:"`),
         * the method does not support items created by addons (having namespace not `"minecraft"`)
         * @since 1.3
         * @since 4.0 you're allowed to specify the string identifier with `"minecraft:"` namespace,
         * it'll be automatically filtered out
         */
        export function getNumericIdFromIdentifier(identifier: any_string): number;

    }

}
declare module KEX {

    /**
     * Module containing methods to access properties of any registered biome,
     * and some new useful features for modded biomes
     * @since 5.0
     */
    export module BiomesModule {

        /**
         * Specifies the custom translation key for the name of the custom biome with given string identifier.
         * This key will then be returned by [[BiomeInterface.getModName]] method.
         * Example:
         * ```ts
         * KEX.BiomesModule.setBiomeTranslationKey("aether_plains", "aether.biome.plains");
         * // translations for "aether.biome.plains" key are added in the lang files
         * 
         * const key = KEX.BiomesModule.getBiomeByName("aether_plains").getTranslationKey();
         * 
         * KEX.I18n.translate(key);
         * // => "Равнины Рая"
         * ```
         * However, you can just add translations for the key `"biome.innercore.your_biome_nameid"`
         * and it will work without using the following method.
         * @since 5.0
         */
        export function setBiomeTranslationKey(biomeNameID: any_string, key: any_string): void;

        /**
         * Specifies the name of the mod adding the custom biome with given string identifier.
         * This name will then be returned by [[BiomeInterface.getModName]] method instead of defaulting to `"InnerCore"`.
         * Example:
         * ```ts
         * KEX.BiomesModule.setModNameForBiome("aether_plains", "Aether");
         * 
         * KEX.BiomesModule.getBiomeByName("aether_plains").getModName();
         * // => "Aether"
         * ```
         * @since 5.0
         */
        export function setModNameForBiome(biomeNameID: any_string, modName: any_string): void;

        /**
         * @returns [[BiomeInterface]] instance for the biome with given numeric identifier,
         * or null if the biome with this ID cannot be found.
         * Throws [[java.lang.IllegalStateException]] if called before biomes initialized.
         * Create a handler for `"BiomesInitialized"` callback to avoid this.
         * @since 5.0
         */
        export function getBiomeById(id: number): Nullable<BiomeInterface>;

        /**
         * @returns [[BiomeInterface]] instance for the biome with given string identifier,
         * or null if the biome with this name ID cannot be found.
         * Throws [[java.lang.IllegalStateException]] if called before biomes initialized.
         * Create a handler for `"BiomesInitialized"` callback to avoid this.
         * @since 5.0
         */
        export function getBiomeByName(name: any_string): Nullable<BiomeInterface>;

        /**
         * Iterates through list of all registered biomes and calls the given function for each of them.
         * Throws [[java.lang.IllegalStateException]] if called before biomes initialized.
         * Create a handler for `"BiomesInitialized"` callback to avoid this.
         * @since 5.0
         */
        export function forEachBiome(callback: (biome: BiomeInterface) => void): void;

        /**
         * Interface used to access different properties of a specific biome.
         * Returned by [[BiomesModule.getBiomeById]] and [[BiomesModule.getBiomeByName]].
         * 
         * [[BiomeInterface]]s for all the biomes are cached in [[BiomesModule]]
         * when `"BiomesInitialized"` event is fired. Biomes are initialized
         * when entering the world, that means you cannot operate the biomes outside of a world.
         * 
         * @since 5.0
         */
        export interface BiomeInterface {

            /**
             * @returns numeric identifier of the following biome,
             * can be different for the same biome in different worlds
             * @since 5.0
             */
            getNumericID(): number;

            /**
             * @returns string identifier of the following biome
             * @since 5.0
             */
            getNameID(): jstring;

            /**
             * @returns temperature value for the following biome, in vanilla
             * varies from -0.5 (taiga) to 2.0 (desert and nether biomes)
             * @since 5.0
             */
            getTemperature(): number;

            /**
             * @returns amount of precipitation (rain or snow) in the following biome,
             * in vanilla varies from 0.0 (desert and nether biomes) to 1.0 (mushroom island)
             * @since 5.0
             */
            getDownfall(): number;

            /**
             * @returns true if biome's downfall is greater than 0.85,
             * or if the biome is force set as humid
             * @since 5.0
             */
            isHumid(): boolean;

            /**
             * @returns true if the following biome has snow instead of rain
             * @since 5.0
             */
            isSnowCovered(): boolean;

            /**
             * @returns true if the following biome is vanilla (probably also
             * returns true for addon-registered biomes)
             * @since 5.0
             */
            isVanilla(): boolean;

            /**
             * @returns true if the following biome was registered with InnerCore API
             * @since 5.0
             */
            isModded(): boolean;

            /**
             * @returns translation key for the following biome's name
             * 
             * If a custom translation key was specified for this biome
             * using [[BiomesModule.setBiomeTranslationKey]], it is returned.
             * 
             * Default key is `biome.namespace.nameid`, where `namespace` is `minecraft`
             * for vanilla biomes and `innercore` for modded biomes.
             * @since 5.0
             */
            getTranslationKey(): jstring;

            /**
             * @returns localized name of the following biome, basically:
             * ```ts
             * KEX.I18n.get(biome.getTranslationKey())
             * ```
             * @since 5.0
             */
            getName(): jstring;

            /**
             * @returns name of the mod adding the following biome, if it was specified
             * using [[BiomesModule.setModNameForBiome]], `"Minecraft"` for vanilla biomes
             * and `"InnerCore"` for modded biomes without specified mod name
             * @since 5.0
             */
            getModName(): jstring;

        }

    }

}
/**
 * Extension for InnerCore's 
 * <a href="https://docs.mineprogramming.org/api/modules/Block.html" target="_blank">Block</a>
 * module adding new methods or patching existing ones.
 * @since 4.0
 */
declare namespace Block {

    /**
     * Same as [[KEX.BlocksModule.registerComparatorSignalCallbackJS]].
     * @since 4.0 
     */
    export function registerComparatorSignalFunctionForID(id: number, func: KEX.BlocksModule.ComparatorSignalCallback, isCallbackForced?: boolean): void;

    /**
     * Same as [[registerComparatorSignalFunctionForID]], but can also take string ID of the block (internally converting it to numeric).
     * @since 4.0
     */
    export function registerComparatorSignalCallback(id: string | number, func: KEX.BlocksModule.ComparatorSignalCallback, isCallbackForced?: boolean): void;

    /**
     * Registers the function that will be called when an entity steps off a block with given numeric ID.
     * The function has the same parameters as in [[Block.registerEntityStepOnFunction]].
     * @since 4.0
     */
    export function registerEntityStepOffFunctionForID(id: number, func: globalThis.Block.EntityStepOnFunction): void;

    /**
     * Same as [[registerEntityStepOffFunctionForID]], but can also take string ID of the block (internally converting it to numeric).
     * @since 4.0
     */
    export function registerEntityStepOffFunction(id: string | number, func: globalThis.Block.EntityStepOnFunction): void;

    /**
     * @returns light level value for the block with given ID and data. If `data` parameter is omitted, it defaults to 0.
     * @since 4.0
     */
    export function getLightLevel(id: number, data?: number): number;

    /**
     * Sets light level value for the block with given ID and data 0
     * @param lightLevel light level value for the block with given ID, clamped between 0 and 15 inclusively
     * @since 4.0
     */
    export function setLightLevel(id: number, lightLevel: number): void;

    /**
     * Sets light level value for the block with given ID and data.
     * Same as [[KEX.BlocksModule.setLightEmission]].
     * @param lightLevel light level value for the block with given ID and data, clamped between 0 and 15 inclusively
     * @since 4.0
     */
    export function setLightLevel(id: number, data: number, lightLevel: number): void;

}
declare module KEX {

    /**
     * A module that adds some new features that can be applied to custom blocks.
     * Remember that you cannot use this module's methods on vanilla blocks,
     * as they don't support them because of some technical peculiarities.
     * @since 4.0
     */
    export module BlocksModule {

        /**
         * Registers the block with given numeric ID as a comparator signal emitter.
         * @param callback the function that will be called on every block with given ID in the world, several times a second,
         * and must return comparator signal strength based on given circumstances
         * @param isCallbackForced Comparator signal callback is called by Minecraft on a block every 2 ticks (10 times a second).
         * For optimization purposes, KEX increases this interval to 10 ticks (2 times a second). If high call frequency is important
         * for your block, you can set this parameter to true, and the interval between calls for your block will be set back to 2 ticks.
         * By default this parameter is set to false.
         * @since 4.0
         */
        export function registerComparatorSignalCallbackJS(id: number, callback: ComparatorSignalCallback, isCallbackForced?: boolean): void;

        /**
         * Registers the block with given numeric ID as a comparator signal emitter.
         * @param callback the function that will be called on every block with given ID in the world, several times a second,
         * and must return comparator signal strength based on given circumstances
         * @param isCallbackForced Comparator signal callback is called by Minecraft on a block every 2 ticks (10 times a second).
         * For optimization purposes, KEX increases this interval to 10 ticks (2 times a second). If high call frequency is important
         * for your block, you can set this parameter to true, and the interval between calls for your block will be set back to 2 ticks.
         * By default this parameter is set to false.
         * @since 5.0
         */
        export function registerComparatorSignalCallback(id: number, callback: ComparatorSignalCallbackJava, isCallbackForced?: boolean): void;

        /**
         * Registers the function that will be called when an entity steps on a block with given numeric ID
         * 
         * **Note:** as of June 2023 (latest InnerCore version being `2.3.1b115`), InnerCore's [[Block.registerEntityStepOnFunction]]
         * is broken, so it's patched by this method in order for it to properly function. If it will be fixed in a future InnerCore
         * update, the patch will be removed.
         * @since 4.0
         */
        export function registerOnStepOnCallback(id: number, callback: OnStepOnCallback): void;

        /**
         * Registers the function that will be called when an entity steps off a block with given numeric ID
         * @since 4.0
         */
        export function registerOnStepOffCallback(id: number, callback: OnStepOffCallback): void;

        /**
         * Unlike the InnerCore's [[Block.SpecialType]]'s `lightlevel` parameter, this method allows to set
         * separate light level values for different data values of a block with the same ID.
         * @param lightLevel light level value for the block with given ID and data, clamped between 0 and 15 inclusively
         * @since 4.0
         */
        export function setLightEmission(id: number, data: number, lightLevel: number): void;

        /**
         * @returns light level value for the block with given ID and data
         * @since 4.0
         */
        export function getLightEmission(id: number, data: number): number;

        /**
         * Registers the block with given numeric ID as a possible holder of given block property.
         * You can't add any properties to your custom block's block state object, if you don't
         * specify all the properties held by your block using this method.
         * @since 5.0
         */
        export function registerStateForBlock(id: number, state: NonNullable<BlockStates.Property<any>>): void;

        /**
         * Function used in [[BlocksModule.registerComparatorSignalCallbackJS]].
         * @param block object containing ID, data and states of the block, on which the callback is called
         * @param world [[BlockSource]] object of the world the block is in
         * @param coords object containing block's coordinates, the `side` where the comparator is located relative
         * to the block, and the coordinates of the comparator itself in `relative` field.
         * @returns comparator signal strength to output from the block. Clamped between 0 and 15 inclusively.
         * @since 4.0
         */
        export interface ComparatorSignalCallback {
            (block: BlockState, world: BlockSource, coords: globalThis.Callback.ItemUseCoordinates): number;
        }

        /**
         * Function used in [[BlocksModule.registerComparatorSignalCallback]].
         * @param block object containing ID, data and states of the block, on which the callback is called
         * @param world [[BlockSource]] object of the world the block is in
         * @param pos integer coordinates of the block's position in the world
         * @param side the side where the comparator is located relative to the block
         * @returns comparator signal strength to output from the block. Clamped between 0 and 15 inclusively.
         * @since 5.0
         */
        export interface ComparatorSignalCallbackJava {
            (block: BlockState, world: BlockSource, pos: Math.BlockPos, side: Math.Direction): number;
        }

        /**
         * Function used in [[BlocksModule.registerOnStepOnCallback]].
         * @param world [[BlockSource]] object of the world the block is in
         * @param pos block's coordinates
         * @param state object containing ID, data and states of the block, on which the callback is called
         * @param entity [[Actor]] object of the entity, which stepped on the block
         * @since 4.0
         */
        export interface OnStepOnCallback {
            (world: BlockSource, pos: Vector, state: BlockState, entity: Actor): void;
        }

        /**
         * Function used in [[BlocksModule.registerOnStepOffCallback]].
         * The parameters are completely the same as in [[OnStepOnCallback]],
         * so instead of rewriting their description here, just an alias is declared.
         * @since 4.0
         */
        export type OnStepOffCallback = OnStepOnCallback;

    }

}
/**
 * Type alias for the InnerCore's [[BlockSource]]
 * to fix names conflicting in [[KEX.BlockSource]] declaration.
 */
type InnerCoreBlockSource = BlockSource;

declare module KEX {

    /**
     * Class extending [[InnerCoreBlockSource]]
     * and adding some new methods not implemented in InnerCore API.
     * @since 3.0
     */
    export class BlockSource extends globalThis.InnerCoreBlockSource {

        /**
         * Constructs new [[BlockSource]] object from an existing [[InnerCoreBlockSource]] object.
         * @since 3.0
         */
        constructor(icObj: InnerCoreBlockSource);

        /**
         * Converts given InnerCore's `BlockSource` object to KEX `BlockSource` object.
         * @since 3.0
         */
        static toKEXBlockSource(icObj: InnerCoreBlockSource): BlockSource;

        /**
         * @returns [[BlockSource]] object for the current client
         * @since 3.0
         */
        static getCurrentClientRegion(): Nullable<BlockSource>;
        
        /**
         * @returns [[BlockSource]] object for world generation
         * @since 3.0
         */
        static getCurrentWorldGenRegion(): Nullable<BlockSource>;
        
        /**
         * @returns [[BlockSource]] object of the dimension where the given [[Actor]] is
         * (null if the given [[Actor]] is not valid or the dimension is not loaded and [[BlockSource]] hasn't been created yet)
         * @since 3.0
         */
        static getDefaultForActor(entity: Actor): Nullable<BlockSource>;
        
        /**
         * @returns [[BlockSource]] object of the dimension where the given entity is
         * (null if the given entity does not exist or the dimension is not loaded and [[BlockSource]] hasn't been created yet)
         * @since 3.0
         */
        static getDefaultForActor(entityUID: number): Nullable<BlockSource>;
        
        /**
         * @returns [[BlockSource]] object of the given dimension by default
         * (null if the given dimension is not loaded and [[BlockSource]] hasn't been created yet)
         * @since 3.0
         */
        static getDefaultForDimension(dimensionId: number): Nullable<BlockSource>;

        /**
         * @returns [[Level]] that owns the dimension of the following [[BlockSource]] or null
         * if this [[BlockSource]] is not owned by a [[Level]] for some reason
         * @since 3.0
         */
        getLevel(): Nullable<Level>;

        /**
         * @returns [[Dimension]] that owns the following [[BlockSource]] or null
         * if this [[BlockSource]] is not owned by a [[Dimension]] for some reason
         * @since 3.0
         */
        getDimensionObject(): Nullable<Dimension>;

        /**
         * @returns wrapper [[TileEntityModule.BlockActor]] object for the custom native block entity
         * on given [[Math.BlockPos]], or null if there is no custom block entity found
         * @since 5.0
         */
        getCustomBlockEntity(pos: Math.BlockPos): Nullable<TileEntityModule.BlockActor>;

        /**
         * @returns wrapper [[TileEntityModule.BlockActor]] object for the custom native block entity
         * on given coords, or null if there is no custom block entity found
         * @since 4.0
         */
        getCustomBlockEntity(x: number, y: number, z: number): Nullable<TileEntityModule.BlockActor>;

        /**
         * @returns [[BlockState]] object to access block properties
         * on given [[Math.BlockPos]], or null if something went wrong getting the block state
         * @since 5.0
         */
        getBlockState(pos: Math.BlockPos): Nullable<BlockState>;

        /**
         * @returns [[BlockState]] object to access block properties
         * on given coordinates, or null if something went wrong getting the block state
         */
        getBlockState(x: number, y: number, z: number): Nullable<BlockState>;

        /**
         * Sets block properties object on given coordinates. Has to be called whenever
         * you want to make changes to a certain block in the world.
         * [[BlockState.setValue]] returns another [[BlockState]] object, which
         * has to be specified here.
         * @returns whether the block state was set successfully or not
         * @since 5.0
         */
        setBlockState(x: number, y: number, z: number, state: BlockState, flags: number): boolean;

        /**
         * Same as [[setBlockState]] but without firing a block update event
         * @returns whether the block state was set successfully or not
         * @since 5.0
         */
        setBlockStateNoUpdate(x: number, y: number, z: number, state: BlockState): boolean;

        /**
         * New implementation of [[InnerCoreBlockSource.getBiome]], which gets the biome
         * on given coordinates, even if the needed chunk is not loaded
         * (takes from 3 to 5 ms in this case)
         * @returns numeric ID of the biome on given coordinates
         * @since 5.0
         */
        getBiome(x: number, z: number): number;

        /**
         * **Purely experimental** variant of [[getBiome]], which doesn't support modded biomes,
         * gives 15-35% speed increase in the overworld, and 700-1000% increase in the nether
         * @returns numeric ID of the biome on given coordinates
         * @since 5.0
         */
        getBiomeFast(x: number, z: number): number;

    }

}
/**
 * Type alias for the InnerCore's [[BlockState]]
 * to fix names conflicting in [[KEX.BlockState]] declaration.
 * @since 5.0
 */
type InnerCoreBlockState = BlockState;

declare module KEX {

    /**
     * Class to operate additional properties of a certain block in the world.
     * Full rewrite not connected with [[InnerCoreBlockState]],
     * adding bunch of useful methods similar to those from Forge.
     * 
     * The main thing you need to know about block states is that
     * the object is in fact immutable. Each object has a **runtime ID**.
     * Each runtime ID refers to a block state object with a specific combination of property values.
     * If you change the value of a property, for example using [[BlockState.setValue]] method,
     * it is not changed in the object, but another object with another runtime ID and
     * needed property values combination is returned.
     * 
     * This also means that if you want to change the value of a block property
     * on specific coordinates in the world, you have to call [[BlockSource.setBlockState]]
     * with an object obtained after changing the value of a property.
     * 
     * Example:
     * ```ts
     * // suppose that the block we are getting is an anvil,
     * // not checking not to distract you
     * const anvil = world.getBlockState(x, y, z);
     * 
     * // as ANVIL_DAMAGE is a property of Java enum type,
     * // convert it to integer type to work with it in JS/TS
     * const ANVIL_DAMAGE_INT = KEX.VanillaStates.ANVIL_DAMAGE.toIntegerProperty();
     * 
     * // getting anvil damage value
     * const damageValue = anvil.getValue(ANVIL_DAMAGE_INT);
     * // if anvil is damaged
     * if(damageValue != KEX.BlockStates.AnvilDamage.UNDAMAGED) {
     *      // resetting anvil damage and storing
     *      // the returned object in the same variable
     *      anvil = anvil.setValue(ANVIL_DAMAGE_INT, KEX.BlockStates.AnvilDamage.UNDAMAGED);
     *      // setting the modified block state in the world (mandatory if changes made)
     *      world.setBlockState(x, y, z, anvil, 0);
     * }
     * ```
     * 
     * One more important thing to note is that a certain block with specific ID cannot store
     * any block property by default. If you are initializing a block which you want to hold
     * some properties, you have to specify them all using [[BlocksModule.registerStateForBlock]] method,
     * providing block's numeric ID and property object.
     * 
     * Since this class released in KEX 5.0, [[InnerCoreBlockState]] was replaced
     * with KEX's [[BlockState]] everywhere it was used.
     * @since 5.0
     */
    export class BlockState extends java.lang.Object {

        /**
         * Constructs new [[BlockState]] instance from given block numeric ID and data
         * @since 5.0
         */
        constructor(id: number, data: number);

        /**
         * @returns runtime ID of the following [[BlockState]], read more
         * about it in the class description
         * @since 5.0
         */
        getRuntimeID(): number;

        /**
         * @returns whether the following [[BlockState]] owns a vanilla
         * or Java-registered custom block entity
         * @since 5.0
         */
        hasBlockEntity(): boolean;

        /**
         * @returns iterable set of all block properties the block type
         * in the following [[BlockState]] can hold
         * @since 5.0
         */
        getProperties(): java.util.Collection<BlockStates.Property<any>>;

        /**
         * @returns whether the block type in the following [[BlockState]]
         * can hold the given block property
         * @since 5.0
         */
        hasProperty<T>(property: BlockStates.Property<T>): boolean;

        /**
         * @returns the value of given block property in the following [[BlockState]].
         * Use only if you are sure the following block can hold the given property.
         * @since 5.0
         */
        getValue<T>(property: BlockStates.Property<T>): T;

        /**
         * @returns the value of given block property in the following [[BlockState]],
         * wrapped in a [[java.util.Optional]] object, which holds null if
         * the following block cannot hold the given property or it was not found for some reason
         * @since 5.0
         */
        getOptionalValue<T>(property: BlockStates.Property<T>): java.util.Optional<T>;

        /**
         * @returns another [[BlockState]] with the given property value matching to the value given.
         * Read more about how it works in the class description.
         * @since 5.0
         */
        setValue<T, V extends T>(property: BlockStates.Property<T>, value: V): BlockState;

        /**
         * @returns [[BlockState]] with the given property set to the value, which goes
         * right next to the current value in the set of possible values of given property
         * @since 5.0
         */
        cycle<T>(property: BlockStates.Property<T>): BlockState;

        /**
         * @returns [[BlockState]] with given rotation applied. Matters only
         * for Java-registered custom blocks with `IRotatable` block component.
         * @since 5.0
         */
        rotate(rotation: Math.Rotation): BlockState;

        /**
         * @returns [[BlockState]] with given mirroring applied. Matters only
         * for Java-registered custom blocks with `IMirrorable` block component.
         * @since 5.0
         */
        mirror(m: Math.Mirror): BlockState;

        /**
         * @since 5.0
         */
        getFriction(): number;

        /**
         * @since 5.0
         */
        getDestroySpeed(): number;

        /**
         * @since 5.0
         */
        getLightBlock(): number;

        /**
         * @since 5.0
         */
        getLightEmission(): number;

    }

    /**
     * Namespace containing functions to register custom block states (properties),
     * and some enums for vanilla properties
     * @since 5.0
     */
    export namespace BlockStates {

        /**
         * Base abstract class for all types of block states
         * @since 5.0
         */
        export interface Property<T> extends java.lang.Object, INativeInterface {

            /**
             * Method implemented differently in every [[Property]] type,
             * used in [[java.lang.Object]]'s [[hashCode]] method implementation
             * @returns hash code for the following [[Property]]
             * @since 5.0
             */
            generateHashCode(): number;

            /**
             * @returns string identifier of the following [[Property]]
             * @since 5.0
             */
            getName(): jstring;

            /**
             * @returns numeric identifier of the following [[Property]]
             * @since 5.0
             */
            getNumericID(): number;

            /**
             * @returns [[java.lang.Class]] of the following [[Property]]'s value type.
             * `Class<Integer>` for [[IntegerProperty]], `Class<Boolean>` for [[BooleanProperty]].
             * @since 5.0
             */
            getValueClass(): java.lang.Class<T>;

            /**
             * Each possible value of a [[Property]] has its corresponding
             * non-negative integer index.
             * @returns index of the given [[Property]] value.
             * Throws [[java.lang.IllegalArgumentException]] if given value
             * is not possible for the following [[Property]].
             * @since 5.0
             */
            getIndex(value: T): number;

            /**
             * @returns [[java.util.Collection]] containing all possible
             * values of the following [[Property]]
             * @since 5.0
             */
            getPossibleValues(): java.util.Collection<T>;

            /**
             * Reverse function for [[getIndex]].
             * @returns [[Property]] value by given index, wrapped in a [[java.util.Optional]],
             * which may be null in case given index is not possible for the following [[Property]].
             * @since 5.0
             */
            getValue(index: number): java.util.Optional<T>;

        }

        /**
         * Class representing an integer type of block state
         * @since 5.0
         */
        export interface IntegerProperty extends Property<number> {}

        /**
         * Class representing a boolean type of block state
         * @since 5.0
         */
        export interface BooleanProperty extends Property<boolean> {}

        /**
         * Class representing a type of block state,
         * which as values takes member of a certain Java enum.
         * Should not be constructed in JS/TS code.
         * Use its [[toIntegerProperty]] method to operate it properly.
         * @since 5.0
         */
        export interface EnumProperty extends Property<any> {

            /**
             * @returns copy of the following [[EnumProperty]] of integer type,
             * to properly operate it in JS/TS code
             * @since 5.0
             */
            toIntegerProperty(): IntegerProperty;

        }

        /**
         * Registers a custom block state of integer type
         * @param name unique string identifier for the block state,
         * which will be used in NBT serialization
         * @param min minimum possible value for the state
         * @param max maximum possible value for the state
         * @returns [[IntegerProperty]] instance for the created block state
         * @since 5.0
         */
        export function createIntegerProperty(name: any_string, min: number, max: number): IntegerProperty;

        /**
         * Registers a custom block state of boolean type
         * @param name unique string identifier for the block state,
         * which will be used in NBT serialization
         * @returns [[BooleanProperty]] instance for the created block state
         * @since 5.0
         */
        export function createBooleanProperty(name: any_string): BooleanProperty;

        /**
         * Enum defining the values of [[VanillaStates.ANVIL_DAMAGE]] block state
         * @since 5.0
         */
        export enum AnvilDamage {
            UNDAMAGED = 0,
            SLIGHTLY_DAMAGED = 1,
            VERY_DAMAGED = 2,
            BROKEN = 3
        }
    
        /**
         * Enum defining the values of [[VanillaStates.BAMBOO_LEAF_SIZE]] block state
         * @since 5.0
         */
        export enum BambooLeaves {
            NONE = 0,
            SMALL = 1,
            LARGE = 2
        }
    
        /**
         * Enum defining the values of [[VanillaStates.BELL_ATTACHMENT]] block state
         * @since 5.0
         */
        export enum BellAttachment {
            FLOOR = 0,
            CEILING = 1,
            SINGLE_WALL = 2,
            DOUBLE_WALL = 3
        }

        /**
         * Enum defining the values of [[VanillaStates.BLOCK_COLOR]] block state
         * @since 5.0
         */
        export enum BlockColor {
            WHITE = 0,
            ORANGE = 1,
            MAGENTA = 2,
            LIGHT_BLUE = 3,
            YELLOW = 4,
            LIME = 5,
            PINK = 6,
            GRAY = 7,
            SILVER = 8,
            CYAN = 9,
            PURPLE = 10,
            BLUE = 11,
            BROWN = 12,
            GREEN = 13,
            RED = 14,
            BLACK = 15
        }

        /**
         * Enum defining the values of [[VanillaStates.CORAL_COLOR]] block state
         * @since 5.0
         */
        export enum CoralColor {
            BLUE = 0,
            PINK = 1,
            PURPLE = 2,
            RED = 3,
            YELLOW = 4
        }

        /**
         * Enum defining the values of [[VanillaStates.HATCH_LEVEL]] block state
         * @since 5.0
         */
        export enum HatchLevel {
            NO_CRACKS = 0,
            CRACKED = 1,
            MAX_CRACKED = 2
        }

        /**
         * Enum defining the values of [[VanillaStates.LEVER_DIRECTION]] block state
         * @since 5.0
         */
        export enum LeverDirection {
            DOWN_EAST_WEST = 0,
            EAST = 1,
            WEST = 2,
            SOUTH = 3,
            NORTH = 4,
            UP_NORTH_SOUTH = 5,
            UP_EAST_WEST = 6,
            DOWN_NORTH_SOUTH = 7
        }

        /**
         * Enum defining the values of [[VanillaStates.PILLAR_AXIS]] block state
         * @since 5.0
         */
        export enum PillarAxis {
            Y = 0, X = 1, Z = 2
        }

        /**
         * Enum defining the values of [[VanillaStates.PORTAL_AXIS]] block state
         * @since 5.0
         */
        export enum PortalAxis {
            UNKNOWN = 0, X = 1, Z = 2
        }

        /**
         * Enum defining the values of [[VanillaStates.RAIL_DIRECTION]] block state
         * @since 5.0
         */
        export enum RailShape {
            NORTH_SOUTH = 0,
            EAST_WEST = 1,
            ASCENDING_EAST = 2,
            ASCENDING_WEST = 3,
            ASCENDING_NORTH = 4,
            ASCENDING_SOUTH = 5,
            SOUTH_EAST = 6,
            SOUTH_WEST = 7,
            NORTH_WEST = 8,
            NORTH_EAST = 9
        }

        /**
         * Enum defining the values of [[VanillaStates.BAMBOO_THICKNESS]] block state
         * @since 5.0
         */
        export enum StalkThickness {
            THIN = 0, THICK = 1
        }

        /**
         * Enum defining the values of [[VanillaStates.STRUCTURE_BLOCK_TYPE]] block state
         * @since 5.0
         */
        export enum StructureBlockType {
            DATA = 0,
            SAVE = 1,
            LOAD = 2,
            CORNER = 3,
            INVALID = 4,
            EXPORT = 5
        }

        /**
         * Enum defining the values of [[VanillaStates.STRUCTURE_VOID_TYPE]] block state
         * @since 5.0
         */
        export enum StructureVoidType {
            VOID = 0, AIR = 1
        }

        /**
         * Enum defining the values of [[VanillaStates.TORCH_FACING_DIRECTION]] block state
         * @since 5.0
         */
        export enum TorchFacing {
            UNKNOWN = 0,
            WEST = 1,
            EAST = 2,
            NORTH = 3,
            SOUTH = 4,
            TOP = 5
        }

        /**
         * Enum defining the values of [[VanillaStates.WALL_CONNECTION_TYPE_NORTH]],
         * [[VanillaStates.WALL_CONNECTION_TYPE_EAST]],
         * [[VanillaStates.WALL_CONNECTION_TYPE_SOUTH]]
         * and [[VanillaStates.WALL_CONNECTION_TYPE_WEST]] block states
         * @since 5.0
         */
        export enum WallConnectionType {
            NONE = 0,
            SHORT = 1,
            TALL = 2
        }

    }

    /**
     * Namespace containing Java wrappers for all the vanilla block states (properties).
     * 
     * Some of them are of Java enum type, should be converted to integer type using
     * [[BlockStates.EnumProperty.toIntegerProperty]] method.
     * There are JS enums in the [[BlockStates]] namespace provided for the most of them.
     * 
     * @since 5.0
     */
    export namespace VanillaStates {
        /**@since 5.0 */
        export const AGE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const AGE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const ATTACHED_BIT: BlockStates.BooleanProperty;
        /**
         * JS enum: [[BlockStates.PortalAxis]]
         * @since 5.0
         */
        export const PORTAL_AXIS: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const BITE_COUNTER: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const BREWING_STAND_SLOT_A_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const BREWING_STAND_SLOT_B_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const BREWING_STAND_SLOT_C_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const BUTTON_PRESSED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const CONDITIONAL_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const COVERED_BIT: BlockStates.BooleanProperty;
        /**
         * JS enum: [[BlockStates.AnvilDamage]]
         * @since 5.0
         */
        export const ANVIL_DAMAGE: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const DISARMED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const DOOR_HINGE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const UPPER_BLOCK_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const HORIZONTAL_FACING: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const END_PORTAL_EYE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const EXPLODE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const FACING_DIRECTION: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const CAULDRON_FILL_LEVEL: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const GROWTH: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const HEAD_PIECE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const HEIGHT: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const INFINIBURN_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const IN_WALL_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const LIQUID_DEPTH: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const MOISTURIZED_AMOUNT: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const NO_DROP_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const KELP_AGE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const OCCUPIED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const OPEN_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const OUTPUT_SUBTRACT_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const OUTPUT_LIT_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const PERSISTENT_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const POWERED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const RAIL_DATA_BIT: BlockStates.BooleanProperty;
        /**
         * JS enum: [[BlockStates.RailShape]]
         * @since 5.0
         */
        export const RAIL_DIRECTION: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const REDSTONE_SIGNAL: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const REPEATER_DELAY: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const SUSPENDED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const TOGGLE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const TOP_SLOT_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const TRIGGERED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const UPDATE_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const UPSIDE_DOWN_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const VINE_DIRECTION_BITS: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const ALLOW_UNDERWATER_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const COLOR_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const DEAD_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const CLUSTER_COUNT: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const ITEM_FRAME_MAP_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const SAPLING_TYPE: BlockStates.IntegerProperty;
        /**
         * JS enum: [[BlockStates.TorchFacing]]
         * @since 5.0
         */
        export const TORCH_FACING_DIRECTION: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const DRAG_DOWN: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const TURTLE_EGG_COUNT: BlockStates.IntegerProperty;
        /**
         * JS enum: [[BlockStates.HatchLevel]]
         * @since 5.0
         */
        export const HATCH_LEVEL: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const GROUND_SIGN_DIRECTION: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const WEIRDO_DIRECTION: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const CORAL_DIRECTION: BlockStates.IntegerProperty;
        /**
         * JS enum: [[BlockStates.BlockColor]]
         * @since 5.0
         */
        export const BLOCK_COLOR: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.StalkThickness]]
         * @since 5.0
         */
        export const BAMBOO_THICKNESS: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.BambooLeaves]]
         * @since 5.0
         */
        export const BAMBOO_LEAF_SIZE: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const STABILITY: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STABILITY_CHECK_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const WOOD_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const DIRT_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const SAND_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const OLD_LOG_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const NEW_LOG_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const CHISEL_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const DEPRECATED: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const OLD_LEAF_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const NEW_LEAF_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const SPONGE_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const SAND_STONE_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const TALL_GRASS_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const FLOWER_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_SLAB_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_SLAB_TYPE_2: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_SLAB_TYPE_3: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_SLAB_TYPE_4: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const MONSTER_EGG_STONE_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const STONE_BRICK_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const HUGE_MUSHROOM_BITS: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const WALL_BLOCK_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const PRISMARINE_BLOCK_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const DOUBLE_PLANT_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const CHEMISTRY_TABLE_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const SEA_GRASS_TYPE: BlockStates.IntegerProperty;
        /**
         * JS enum: [[BlockStates.CoralColor]]
         * @since 5.0
         */
        export const CORAL_COLOR: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const CAULDRON_LIQUID_TYPE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const HANGING_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const STRIPPED_BIT: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const CORAL_HANG_TYPE_BIT: BlockStates.BooleanProperty;
        /**
         * JS enum: [[BlockStates.BellAttachment]]
         * @since 5.0
         */
        export const BELL_ATTACHMENT: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.StructureVoidType]]
         * @since 5.0
         */
        export const STRUCTURE_VOID_TYPE: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.StructureBlockType]]
         * @since 5.0
         */
        export const STRUCTURE_BLOCK_TYPE: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const EXTINGUISHED: BlockStates.BooleanProperty;
        /**@since 5.0 */
        export const COMPOSTER_FILL_LEVEL: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const CORAL_FAN_DIRECTION: BlockStates.IntegerProperty;
        /**
         * JS enum: [[BlockStates.LeverDirection]]
         * @since 5.0
         */
        export const LEVER_DIRECTION: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.PillarAxis]]
         * @since 5.0
         */
        export const PILLAR_AXIS: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const BLOCK_LIGHT_LEVEL: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const HONEY_LEVEL: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const WEEPING_VINES_AGE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const WALL_POST_BIT: BlockStates.BooleanProperty;
        /**
         * JS enum: [[BlockStates.WallConnectionType]]
         * @since 5.0
         */
        export const WALL_CONNECTION_TYPE_NORTH: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.WallConnectionType]]
         * @since 5.0
         */
        export const WALL_CONNECTION_TYPE_EAST: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.WallConnectionType]]
         * @since 5.0
         */
        export const WALL_CONNECTION_TYPE_SOUTH: BlockStates.EnumProperty;
        /**
         * JS enum: [[BlockStates.WallConnectionType]]
         * @since 5.0
         */
        export const WALL_CONNECTION_TYPE_WEST: BlockStates.EnumProperty;
        /**@since 5.0 */
        export const ROTATION: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const TWISTING_VINES_AGE: BlockStates.IntegerProperty;
        /**@since 5.0 */
        export const RESPAWN_ANCHOR_CHARGE: BlockStates.IntegerProperty;
    }

}
/**
 * Extension for InnerCore's
 * <a href="https://docs.mineprogramming.org/api/modules/Callback.html" target="_blank">Callback</a>
 * module listing new callbacks invoked by Kernel Extension mod
 * and adding some new features to the callback system.
 * @since 1.0
 */
declare namespace Callback {

    export function addCallback(name: "KEX-InnerCoreIdsCached", func: () => void, priority?: number): void;
    export function addCallback(name: "PlayerJump", func: PlayerJumpFunction, priority?: number): void;
    export function addCallback(name: "GameModeChanged", func: GameModeChangedFunction, priority?: number): void;
    export function addCallback(name: "ChangeCarriedItem", func: ChangeCarriedItemFunction, priority?: number): void;
    export function addCallback(name: "EntitySneakChanged", func: EntitySneakChangedFunction, priority?: number): void;
    export function addCallback(name: "ItemTooltip", func: KEX.ItemsModule.OnTooltipCallback, priority?: number): void;
    export function addCallback(name: "BlockEventEntityStepOff", func: globalThis.Block.EntityStepOnFunction, priority?: number): void;
    export function addCallback(name: "BiomesInitialized", func: () => void, priority?: number): void;

    /**
     * Same as [[addCallback]], but using improved callback system allowing
     * you to add a callback handler, that will be called only [[once]],
     * or to remove an existing callback handler with [[off]].
     * @since 2.1
     */
    export var on: typeof addCallback;
    
    /**
     * Same as [[addCallback]], but the given callback handler
     * will be called only once, when the event occurs, and then it'll be removed
     * from the handlers list.
     * @since 2.1
     */
    export var once: typeof addCallback;

    /**
     * Removes an existing callback handler from the handlers list.
     * To use this, you'll need to make your handler an external function, for example:
     * ```js
     * var jumpCounter = 0;
     * function jumpHandler(player) {
     *     if(++jumpCounter >= 10) {
     *         Callback.off("PlayerJump", jumpHandler);
     *     }
     *     Debug.m("The player has already jumped " + jumpCounter + " times!");
     * }
     * Callback.on("PlayerJump", jumpHandler);
     * ```
     * @since 2.1
     */
    export var off: typeof addCallback;

    /**
     * Function used in `"PlayerJump"` callback.
     * @param player unique ID of the player, who jumped
     * @since 2.0
     */
    export interface PlayerJumpFunction {
        (player: number): void;
    }

    /**
     * Function used in `"GameModeChanged"` callback.
     * @param mode numeric ID of the game mode the local player has switched to
     * @since 2.0
     */
    export interface GameModeChangedFunction {
        (mode: number): void;
    }

    /**
     * Function used in `"ChangeCarriedItem"` callback
     * @param player unique ID of the player, whose carried item has changed
     * @param oldItem item instance of the player's hand before changing
     * @param newItem item instance of the player's hand after changing
     * @param hand 0=mainhand, 1=offhand
     * @since 2.2.2
     */
    export interface ChangeCarriedItemFunction {
        (player: number, oldItem: ItemInstance, newItem: ItemInstance, hand: 0 | 1): void;
    }

    /**
     * Function used in `"EntitySneakChanged"` callback.
     * @param entity unique ID of the entity, that changed their sneak state
     * @param sneaking sneak state of the entity after changing, true = sneaking, false = not sneaking
     * @since 3.0
     */
    export interface EntitySneakChangedFunction {
        (entity: number, sneaking: boolean): void;
    }

}
declare module KEX {

    /**
     * The object used to modify player's camera roll angle.
     * @since 3.0
     */
    export class CameraRollModifier extends java.lang.Object {

        /**
         * Constructs new [[CameraRollModifier]] object and adds it to the global list.
         * Remember that it must only be created on the client side, so you probably will have to use client packets.
         * @since 3.0
         */
        constructor();

        /**
         * Sets the value that will be added to the camera roll angle.
         * This value must be in radians, so if you have it in degrees,
         * you must divide it by pi and multiply it by 180.
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setModifier(modifier: number): CameraRollModifier;
        
        /**
         * Enables or disables builtin interpolation feature for the following [[CameraRollModifier]].
         * This feature will change the roll angle every frame for the changes to be smoother.
         * 
         * By default the interpolation feature is enabled for a new-created [[CameraRollModifier]].
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setInterpolationEnabled(interpolationEnabled: boolean): CameraRollModifier;
        
        /**
         * Sets smoothing power. This value is used in interpolation logics. It must be
         * a value from 0 to 1 non-inclusively. If you put 1, the roll will stop,
         * if you put 0, there will be no interpolation at all.
         * 
         * This value is 0.85 by default, and you may just don't change it, as it
         * already provides you with a smooth roll.
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setSmoothing(smoothing: number): CameraRollModifier;
        
        /**
         * Enables the following modifier object
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        enable(): CameraRollModifier;
        
        /**
         * Disables the following modifier object
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        disable(): CameraRollModifier;
        
        /**
         * @returns the value that will be added to the camera roll angle, in radians
         * @since 3.0
         */
        getModifier(): number;
        
        /**
         * @returns whether the interpolation feature is enabled for the following modifier object
         * @since 3.0
         */
        isInterpolationEnabled(): boolean;
        
        /**
         * @returns smoothing power value for the following modifier object
         * @since 3.0
         */
        getSmoothing(): number;
        
        /**
         * @returns whether the following modifier object is enabled at the moment
         * @since 3.0
         */
        isActive(): boolean;

    }

}
declare module KEX {

    /**
     * Module to work with loaded areas in the world.
     * Actually a shortcut of [[TickingAreasManager]] class with more human-readable structure.
     * @since 3.0
     */
    export module ChunksModule {

        /**
         * Adds new rectangle-shaped ticking area to the given dimension.
         * @param dimension dimension where to create the ticking area
         * @param name name of the area, that must be unique for the given dimension.
         * If you omit this parameter, the name will be set to default (`"Area{N}"`), where `{N}` is an incrementing integer).
         * - Note: before creating a new area with the name specified, ensure that there is no area
         * with your name in the given dimension, using [[ChunksModule.areaExists]]. If you skip this check,
         * you may get a [[java.lang.IllegalArgumentException]] when calling [[LoadedRectangle.load]].
         * @returns object to specify start and end position of your area, and then load it
         * @since 3.0
         */
        export function addLoadedRectangle(dimension: WorldOrDimension, name?: any_string): LoadedRectangle;

        /**
         * Adds new circle-shaped ticking area to the given dimension.
         * @param dimension dimension where to create the ticking area
         * @param name name of the area, that must be unique for the given dimension.
         * If you omit this parameter, the name will be set to default (`"Area{N}"`), where `{N}` is an incrementing integer).
         * - Note: before creating a new area with the name specified, ensure that there is no area
         * with your name in the given dimension, using [[ChunksModule.areaExists]]. If you skip this check,
         * you may get a [[java.lang.IllegalArgumentException]] when calling [[LoadedCircle.load]].
         * @returns object to specify center position and radius of your area, and then load it
         * @since 3.0
         */
        export function addLoadedCircle(dimension: WorldOrDimension, name?: any_string): LoadedCircle;

        /**
         * Adds new rectangle-shaped ticking area to the given dimension, covering only one chunk on given coordinates.
         * It is actually a shortcut, which looks like this:
         * ```java
         * return addLoadedRectangle(dimension, name)
         *     .start(x, z)
         *     .end(x, z);
         * ```
         * @param dimension dimension where to create the ticking area
         * @param name name of the area, that must be unique for the given dimension.
         * If you omit this parameter, the name will be set to default (`"Area{N}"`), where `{N}` is an incrementing integer).
         * - Note: before creating a new area with the name specified, ensure that there is no area
         * with your name in the given dimension, using [[ChunksModule.areaExists]]. If you skip this check,
         * you may get a [[java.lang.IllegalArgumentException]] when calling [[LoadedRectangle.load]].
         * @returns object to load the created area. This method returns the same object as [[addLoadedRectangle]], but
         * in this case you don't need to specify start and end position of the area.
         * @since 3.0
         */
        export function addLoadedChunk(dimension: WorldOrDimension, x: number, z: number, name?: any_string): LoadedRectangle;

        /**
         * @returns whether a ticking area with given name exists in given dimension
         * @since 3.0
         */
        export function areaExists(name: any_string, dimension: WorldOrDimension): boolean;

        /**
         * Object returned by [[ChunksModule.addLoadedRectangle]] and [[ChunksModule.addLoadedChunk]].
         * @since 3.0
         */
        export interface LoadedRectangle {

            /**
             * Specifies the start position of your area. If the following [[LoadedRectangle]] was returned
             * by [[ChunksModule.addLoadedChunk]], you don't need to call this method.
             * Also note that your area will cover not only the blocks included in the resulting rectangle,
             * but all the chunks that intersect with this rectangle.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            start(x: number, z: number): LoadedRectangle;

            /**
             * Specifies the end position of your area. If the following [[LoadedRectangle]] was returned
             * by [[ChunksModule.addLoadedChunk]], you don't need to call this method.
             * Also note that your area will cover not only the blocks included in the resulting rectangle,
             * but all the chunks that intersect with this rectangle.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            end(x: number, z: number): LoadedRectangle;

            /**
             * Loads the following area into the world.
             * Ensure that you've specified [[start]] and [[end]] positions before calling this method,
             * otherwise you'll get a [[java.lang.IllegalStateException]].
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            load(): LoadedRectangle;

            /**
             * Unloads the following area from the world.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            unload(): LoadedRectangle;

            /**
             * @returns whether the following area is loaded into the world at the moment
             * @since 3.0
             */
            isLoaded(): boolean;

        }

        /**
         * Object returned by [[ChunksModule.addLoadedCircle]].
         * @since 3.0
         */
        export interface LoadedCircle {

            /**
             * Specifies the center position of your area.
             * Note that your area will cover not only the blocks included in the resulting circle,
             * but all the chunks that intersect with this circle.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            center(x: number, z: number): LoadedCircle;

            /**
             * Specifies the radius of your circle area in meters (blocks).
             * Note that your area will cover not only the blocks included in the resulting circle,
             * but all the chunks that intersect with this circle.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            radius(r: number): LoadedCircle;

            /**
             * Loads the following area into the world.
             * Ensure that you've specified [[center]] position and [[radius]] before calling this method,
             * otherwise you'll get a [[java.lang.IllegalStateException]].
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            load(): LoadedCircle;

            /**
             * Unloads the following area from the world.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            unload(): LoadedCircle;

            /**
             * @returns whether the following area is loaded into the world at the moment
             * @since 3.0
             */
            isLoaded(): boolean;

        }

    }

}
/**
 * Extension for InnerCore's
 * <a href="https://docs.mineprogramming.org/api/modules/Commands.html" target="_blank">Commands</a>
 * module adding custom chat commands registration API,
 * alternative to [[KEX.CommandsModule]], having the structure
 * which is more convenient for JavaScript development.
 * @since 3.0
 */
declare namespace Commands {

    /**
     * Same as [[KEX.CommandsModule.newEnum]].
     * @returns object to add enum's key-value pairs one by one and then call its `register` method to register the enum itself
     * @since 3.0
     */
    export function newEnum(enumName: string): KEX.CommandsModule.EnumBuilder;

    /**
     * Same as [[KEX.CommandsModule.newStringEnum]].
     * @returns object to add enum values one by one and then call its `register` method to register the enum itself
     * @since 3.0
     */
    export function newStringEnum(enumName: string): KEX.CommandsModule.StringEnumBuilder;
    
    /**
     * Initializes new custom chat command.
     * @param commandName command's name that will have to be put after a slash
     * @param permissionLevel command's permission level, defaults to 0 (all players can use this command)
     * @returns object to describe your custom chat command, and then call its `register` method to register the command
     * @since 3.0
     */
    export function create(commandName: string, permissionLevel?: number): CustomCommandBuilder;

    /**
     * Object returned by [[Commands.create]] used to describe a custom chat command,
     * and then call its `register` method to register the command.
     * @since 3.0
     */
    export interface CustomCommandBuilder {

        /**
         * Adds new overload of the following command.
         * @param args list of argument descriptions of this overload
         * @param callback function that will be called for the following command with given arguments
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        addOverload(args: Arguments[], callback: ExecuteCallback): CustomCommandBuilder;

        /**
         * Specifies command's description, that will be displayed
         * above the chat input box when writing `/your_command_name`.
         * In this overload, the given description is set as the English localization,
         * which will be used by default if you don't add translations to other languages.
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setDescription(desc: string): CustomCommandBuilder;

        /**
         * Specifies command's description, that will be displayed
         * above the chat input box when writing `/your_command_name`.
         * @param translations object with language codes as keys and translations
         * of the command description to the corresponding language as values
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setDescription(translations: { [key: string]: string }): CustomCommandBuilder;

        /**
         * Registers the command after specifying all its needed data
         * (overloads, description translations etc.)
         * @since 3.0
         */
        register(): void;

    }

    /**
     * Template interface to simplify declarations of each command argument type.
     * 
     * `T` typename is used for string name of the argument type,
     * `I` is for integer ID of the argument type,
     * and `D` is for the type of default value, it's set to `never` (doesn't need to be specified),
     * if the argument of the following type doesn't take default values.
     * @since 3.0
     */
    export interface Argument<T, I, D> {

        /**
         * Argument's name that will be displayed in command syntax hint text,
         * and also will be used to access its value on command call.
         */
        label: string,

        /**
         * Integer or string type of the following argument.
         */
        type: T | I,
        
        /**
         * Default value for the following argument,
         * sometimes doesn't need to be specified, if the type of argument
         * doesn't take default values.
         */
        default?: D,

        /**
         * Whether the following argument is optional, defaults to false.
         * If you at least once set this property to true, then all
         * the arguments coming after the following one will become optional too.
         */
        optional?: boolean;

    }

    /**
     * Type alias declaring a description object template for the command argument of integer type.
     * @since 3.0
     */
    export type IntArgument = Argument<"int" | "integer", KEX.EArgumentType.INT, number>;

    /**
     * Type alias declaring a description object template for the command argument of floating point type.
     * @since 3.0
     */
    export type FloatArgument = Argument<"float", KEX.EArgumentType.FLOAT, number>;

    /**
     * Type alias declaring a description object template for the command argument of boolean type.
     * @since 3.0
     */
    export type BoolArgument = Argument<"bool" | "boolean", KEX.EArgumentType.BOOL, boolean>;

    /**
     * Type alias declaring a description object template for the command argument of relative float type
     * (`~VALUE`, where `~` is the center value you choose in your code).
     * @since 3.0
     */
    export type RelativeFloatArgument = Argument<"relfloat" | "relativefloat", KEX.EArgumentType.RELATIVE_FLOAT, number>;

    /**
     * Type alias declaring a description object template for the command argument of integer coordinates position type.
     * @since 3.0
     */
    export type PositionArgument = Argument<"pos" | "position", KEX.EArgumentType.POSITION, Vector>;

    /**
     * Type alias declaring a description object template for the command argument of floating point coordinates position type.
     * @since 3.0
     */
    export type FloatPositionArgument = Argument<"floatpos" | "floatposition", KEX.EArgumentType.FLOAT_POSITION, Vector>;

    /**
     * Type alias declaring a description object template for the command argument of string type.
     * @since 3.0
     */
    export type StringArgument = Argument<"str" | "string", KEX.EArgumentType.STRING, string>;

    /**
     * Type alias declaring a description object template for the command argument of message type.
     * Same as [[StringArgument]], but must be put as a last argument of the command overload,
     * as it'll grab all the rest of the command text to its string value.
     * @since 3.0
     */
    export type MessageArgument = Argument<"msg" | "message", KEX.EArgumentType.MESSAGE, never>;

    /**
     * Type alias declaring a description object template for the command argument of JSON object type.
     * @since 3.0
     */
    export type JsonArgument = Argument<"json", KEX.EArgumentType.JSON, never>;

    /**
     * Type alias declaring a description object template for the command argument of entity selector type.
     * @since 3.0
     */
    export type EntityArgument = Argument<"entity", KEX.EArgumentType.ENTITY, never>;

    /**
     * Type alias declaring a description object template for the command argument of player selector type.
     * @since 3.0
     */
    export type PlayerArgument = Argument<"player", KEX.EArgumentType.PLAYER, never>;

    /**
     * Interface declaring a description object template for the command argument of integer enum type.
     * @since 3.0
     */
    export interface EnumArgument extends Argument<"enum", KEX.EArgumentType.ENUM, number> {

        /**
         * String name of the enum used to convert
         * string enum keys written by the player to corresponding integer enum values,
         * and to suggest the enum's keys to the player above the chat input box.
         */
        name: string;

    }
    
    /**
     * Interface declaring a description object template for the command argument of string enum type.
     * @since 3.0
     */
    export interface StringEnumArgument extends Argument<"strenum" | "stringenum", KEX.EArgumentType.STRING_ENUM, string> {

        /**
         * String name of the enum used to validate
         * the string value written by the player, and to suggest the enum's values
         * to the player above the chat input box.
         */
        name: string;

        /**
         * Only in the argument of string enum type, default value is required.
         */
        default: string;

    }

    /**
     * Type alias declaring a description object template for the command argument of literal type.
     * 
     * A literal is one specific word that must be written into the chat command line,
     * like `list` in `/tickingarea list` or `clear` in `/effect visualstudiodan clear`
     * @since 3.0
     */
    export type LiteralArgument = Argument<"literal", KEX.EArgumentType.LITERAL, never>;

    /**
     * Type alias listing all types of command argument description objects,
     * that can be put into the `args` array in [[CustomCommandBuilder.addOverload]].
     * @since 3.0
     */
    export type Arguments =
        IntArgument |
        FloatArgument |
        BoolArgument |
        RelativeFloatArgument |
        PositionArgument |
        FloatPositionArgument |
        StringArgument |
        MessageArgument |
        JsonArgument |
        EntityArgument |
        PlayerArgument |
        EnumArgument |
        StringEnumArgument |
        LiteralArgument;

    /**
     * Representation of relative float argument in `args` parameter
     * of [[ExecuteCallback]].
     * It's a function that optionally takes a `center` value
     * to add it to the specified floating point value,
     * if the caller used `~` token before it.
     * @since 3.0
     */
    export type RelativeFloat = (center?: number) => number;

    /**
     * Function used in [[CustomCommandBuilder.addOverload]].
     * @param args object containing the values of all the arguments of the
     * following command overload specified by the command caller,
     * corresponding to the arguments' string names
     * @param context object to access the argument values and data about command caller,
     * and to print the command successfull or failed result
     * @since 3.0
     */
    export interface ExecuteCallback {
        (args: {
            [key: string]:
                number |
                boolean |
                RelativeFloat |
                Vector |
                string |
                Nullable<{ [key: string]: any }> |
                KEX.Actor[] |
                KEX.Player[]
        }, context: KEX.CommandsModule.CommandContext): void;
    }
    
}
declare module KEX {

    /**
     * Module to register custom chat commands.
     * @since 3.0
     */
    export module CommandsModule {

        /**
         * Creates an object to describe a new custom chat command.
         * The result must be put in [[CommandsModule.registerCommand]] after specifying everything you need.
         * @param name command's name that will have to be put after a slash
         * @param permissionLevel command's permission level, defaults to 0 (all players can use this command)
         * @returns the object to describe a new custom chat command
         * @since 3.0
         */
        export function newCommand(name: any_string, permissionLevel?: number): CommandOverloadBase;

        /**
         * Registers new custom chat command from given data object returned by [[CommandsModule.newCommand]].
         * You have to call this method with your [[CommandOverloadBase]] only after specifying everything you need
         * for this command.
         *  
         * However, this can be done in a single sequential call, for example:
         * ```js
         * KEX.CommandsModule.registerCommand(KEX.CommandsModule.newCommand("heal", 1)
         *     .then(KEX.CommandsModule.entityArg("target")
         *         .executes(function(ctx) {
         *             heal(ctx.getEntities("target"), 20);
         *         })
         *         .then(KEX.CommandsModule.intArg("amount")
         *             .executes(function(ctx) {
         *                 heal(ctx.getEntities("target"), ctx.getInt("amount"))
         *             })
         *         )
         *     )
         * );
         * 
         * function heal(entities, amount) {
         *     let iter = entities.iterator();
         *     while(iter.hasNext()) iter.next().heal(amount);
         * }
         * ```
         * @since 3.0
         */
        export function registerCommand(base: CommandOverloadBase): void;

        /**
         * Registers new custom chat command with fully custom parser defined by yourself.
         * 
         * Actually it's just a shortcut that looks like this:
         * ```java
         * registerCommand(newCommand(name, permissionLevel)
         *     .then(messageArg("{...}")
         *         .executes(new CommandExecuteCallback() {
         *             public void execute(CommandContext ctx)
         *             {
         *                 callback.execute(ctx.getMessage("{...}"), ctx);
         *             }
         *         })
         *     )
         * );
         * ```
         * @param name command's name that will have to be put after a slash
         * @param callback function defining command's behavior depending on the command message and [[CommandContext]]
         * @param permissionLevel command's permission level, defaults to 0 (all players can use this command)
         * @since 3.0
         */
        export function registerCustomParserCommand(name: any_string, callback: CustomParserCommandExecuteCallback, permissionLevel?: number): void;

        /**
         * @returns object to describe new integer argument for the custom command;
         * if `defaultValue` is not specified, it defaults to 0
         * @since 3.0
         */
        export function intArg(name: any_string, defaultValue?: number): CommandArgument;

        /**
         * @returns object to describe new floating point argument for the custom command;
         * if `defaultValue` is not specified, it defaults to 0.0
         * @since 3.0
         */
        export function floatArg(name: any_string, defaultValue?: number): CommandArgument;

        /**
         * @returns object to describe new boolean argument for the custom command;
         * if `defaultValue` is not specified, it defaults to true
         * @since 3.0
         */
        export function boolArg(name: any_string, defaultValue?: boolean): CommandArgument;

        /**
         * @returns object to describe new relative float
         * (`~VALUE`, where `~` is the center value you choose in your code)
         * argument for the custom command;
         * if `defaultValue` is not specified, it defaults to 0.0
         * @since 3.0
         */
        export function relativeFloatArg(name: any_string, defaultValue?: number): CommandArgument;

        /**
         * @returns object to describe new position argument with integer coordinates for the custom command;
         * In this overload, the default value for the position is {0, 0, 0}
         * @since 3.0
         */
        export function positionArg(name: any_string): CommandArgument;

        /**
         * @returns object to describe new position argument with integer coordinates for the custom command
         * @since 3.0
         */
        export function positionArg(name: any_string, defaultX: number, defaultY: number, defaultZ: number): CommandArgument;

        /**
         * @returns object to describe new position argument with floating point coordinates for the custom command;
         * In this overload, the default value for the position is {0.0, 0.0, 0.0}
         * @since 3.0
         */
        export function floatPositionArg(name: any_string): CommandArgument;

        /**
         * @returns object to describe new position argument with floating point coordinates for the custom command
         * @since 3.0
         */
        export function floatPositionArg(name: any_string, defaultX: number, defaultY: number, defaultZ: number): CommandArgument;

        /**
         * @returns object to describe new string argument for the custom command;
         * if `defaultValue` is not specified, it defaults to null.
         * @since 3.0
         */
        export function stringArg(name: any_string, defaultValue?: any_string): CommandArgument;

        /**
         * @returns object to describe new message argument for the custom command.
         * This argument type is used to be put as a last argument of the command,
         * so it'll grab all the rest of the command text to its string
         * @since 3.0
         */
        export function messageArg(name: any_string): CommandArgument;

        /**
         * @returns object to describe new JSON object argument for the custom command
         * @since 3.0
         */
        export function jsonArg(name: any_string): CommandArgument;

        /**
         * @returns object to describe new entity selector argument for the custom command
         * @since 3.0
         */
        export function entityArg(name: any_string): CommandArgument;
        
        /**
         * @returns object to describe new player selector argument for the custom command
         * @since 3.0
         */
        export function playerArg(name: any_string): CommandArgument;

        /**
         * @returns object to describe new enum argument for the custom command.
         * The user will have to input a string enum key, which they'll be able to choose from
         * the list of suggestions above the input box, and then internally this key will be converted
         * to the corresponding integer value (you'll be able to get it using [[CommandContext.getInt]]).
         * If `defaultValue` is not specified, it defaults to 0.
         * @since 3.0
         */
        export function enumArg(name: any_string, enumName: any_string, defaultValue?: number): CommandArgument;

        /**
         * @returns object to describe new string enum argument for the custom command.
         * The user will have to input a string enum value, which they'll be able to choose from
         * the list of suggestions above the input box, and then you'll be able to get it using [[CommandContext.getString]].
         * Note that `defaultValue` is required here.
         * @since 3.0
         */
        export function stringEnumArg(name: any_string, enumName: any_string, defaultValue: any_string): CommandArgument;
        
        /**
         * @returns object to describe new literal argument for the custom command.
         * A literal is one specific word that must be written into the chat command line,
         * like `list` in `/tickingarea list` or `clear` in `/effect visualstudiodan clear`
         * @since 3.0
         */
        export function literal(l: any_string): CommandArgument;

        /**
         * Registers an alias (alternative name) for the command with given name,
         * like `tp` for `teleport` and `?` for `help` in vanilla.
         * @param name command's original name
         * @param alias alternative name to assign to the command's name
         * @since 3.0
         */
        export function registerAlias(name: any_string, alias: any_string): void;

        /**
         * Registers a new command enum (set of keys each of which can be used as a command argument
         * and corresponds to a specific integer value, which then can be got using [[CommandContext.getInt]]).
         * @param name enum's name that has to be used in [[CommandsModule.enumArg]] as the `enumName` parameter
         * @param values enum's data set represented as a [[java.util.Map]] with string keys and integer values.
         * Different keys can have same values.
         * @since 3.0
         */
        export function addEnum(name: any_string, values: java.util.Map<any_string, number>): void;
        
        /**
         * Registers a new command enum (set of keys each of which can be used as a command argument
         * and corresponds to a specific integer value, which then can be got using [[CommandContext.getInt]]).
         * @param name enum's name that has to be used in [[CommandsModule.enumArg]] as the `enumName` parameter
         * @param values enum's data set represented as a JS object with string keys and integer values.
         * Different keys can have same values.
         * @since 3.0
         */
        export function addEnum(name: any_string, values: { [key: string]: number }): void;
        
        /**
         * Registers a new string command enum (set of strings each of which can be used as a command argument,
         * which then can be got using [[CommandContext.getString]]).
         * @param name enum's name that has to be used in [[CommandsModule.stringEnumArg]] as the `enumName` parameter
         * @param values enum values represented as a [[java.util.Set]] of unique strings
         * @since 3.0
         */
        export function addStringEnum(name: any_string, values: java.util.Set<any_string>): void;

        /**
         * Registers a new string command enum (set of strings each of which can be used as a command argument,
         * which then can be got using [[CommandContext.getString]]).
         * @param name enum's name that has to be used in [[CommandsModule.stringEnumArg]] as the `enumName` parameter
         * @param values enum values represented as an array of unique strings
         * @since 3.0
         */
        export function addStringEnum(name: any_string, values: any_string[]): void;

        /**
         * Sequential-call-based alternative of [[CommandsModule.addEnum]].
         * @param name enum's name that has to be used in [[CommandsModule.enumArg]] as the `enumName` parameter
         * @returns object to add enum's key-value pairs one by one and then call its `register` method to register the enum itself
         * @since 3.0
         */
        export function newEnum(name: any_string): EnumBuilder;

        /**
         * Sequential-call-based alternative of [[CommandsModule.addStringEnum]].
         * @param name enum's name that has to be used in [[CommandsModule.stringEnumArg]] as the `enumName` parameter
         * @returns object to add enum values one by one and then call its `register` method to register the enum itself
         * @since 3.0
         */
        export function newStringEnum(name: any_string): StringEnumBuilder;

        /**
         * Object returned by [[CommandsModule.newCommand]]
         * used to describe a custom chat command.
         * @since 3.0
         */
        export interface CommandOverloadBase {
            
            /**
             * Adds the first argument of the command.
             * Each call creates a new command overload.
             * To add arguments further than the first, you have
             * to use [[CommandArgument.then]].
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            then(child: CommandArgument): CommandOverloadBase;
            
            /**
             * Specifies the function that will be called for
             * the following command without arguments.
             * If you call [[executes]] in [[CommandOverloadBase]],
             * this will automatically create a command overload without arguments.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            executes(callback: CommandExecuteCallback): CommandOverloadBase;
            
            /**
             * @returns the function that will be called for the following
             * command without arguments or null, if [[executes]] has not been called.
             * @since 3.0
             */
            getCallback(): Nullable<CommandExecuteCallback>;
            
            /**
             * Adds an alias (alternative name) for the following command.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            addAlias(alias: any_string): CommandOverloadBase;
            
            /**
             * Adds multiple aliases (alternative names) for the following command.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            addAliases(aliases: any_string[]): CommandOverloadBase;
            
            /**
             * Specifies command's description, that will be displayed
             * above the chat input box when writing `/your_command_name`.
             * In this overload, the given description is set as the English localization,
             * which will be used by default if you don't add translations to other languages.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setDescription(description: any_string): CommandOverloadBase;
            
            /**
             * Specifies command's description, that will be displayed
             * above the chat input box when writing `/your_command_name`.
             * @param translations object with language codes as keys and translations
             * of the command description to the corresponding language as values
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setDescription(translations: { [key: string]: string }): CommandOverloadBase;
            
            /**
             * @returns list of all recursively found overloads of the following chat command,
             * each overload is represented as an ordered [[java.util.List]] of its arguments.
             * @since 3.0
             */
            listOverloads(): java.util.List<java.util.List<CommandArgument>>;

        }

        /**
         * Object representing one of the arguments of the chat command.
         * There are 14 types of arguments, you can get corresponding objects
         * using [[CommandsModule]] methods ending with `Arg`.
         * @since 3.0
         */
        export interface CommandArgument {
            
            /**
             * Adds an argument that will come after the following argument.
             * If you call this multiple times on one [[CommandArgument]],
             * separate overloads will be created.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            then(child: CommandArgument): CommandArgument;
            
            /**
             * Specifies the function that will be called for
             * the following command with the following argument being the last specified by the player.
             * After calling [[executes]] on a [[CommandArgument]],
             * all arguments coming after it become optional.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            executes(callback: CommandExecuteCallback): CommandArgument;
            
            /**
             * @returns the function that will be called for the following
             * command with the following argument being the last specified by the player,
             * or null, if [[executes]] has not been called for this [[CommandArgument]].
             * @since 3.0
             */
            getCallback(): Nullable<CommandExecuteCallback>;

        }

        /**
         * Function used in [[CommandOverloadBase.then]] and [[CommandArgument.then]],
         * to specify the custom command's behavior without arguments and with a
         * specific argument being the last specified by the player, correspondingly.
         * @param ctx object to access the argument values and data about command caller,
         * and to print the command successfull or failed result
         * @since 3.0
         */
        export interface CommandExecuteCallback {
            (ctx: CommandContext): void;
        }

        /**
         * Function used in [[CommandsModule.registerCustomParserCommand]]
         * to manually parse the command text and apply your custom parser chat command's behavior.
         * @param text the whole command text except `/your_command_name `
         * @param ctx object to access the argument values and data about command caller,
         * and to print command's successfull or failed result
         * @since 3.0
         */
        export interface CustomParserCommandExecuteCallback {
            (text: jstring, ctx: CommandContext): void;
        }

        /**
         * Wrapper for `Command`, `CommandOrigin` and `CommandOutput` native classes at the same time
         * used in custom chat command execute callbacks allowing you to access
         * the values of the specified arguments and the entity or another source that called the command,
         * and also to print command's successfull or failed result.
         * @since 3.0
         */
        export interface CommandContext {
            
            /**
             * @returns value of integer argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of integer type
             * @since 3.0
             */
            getInt(name: any_string): number;
            
            /**
             * @returns value of floating point argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of floating point type
             * @since 3.0
             */
            getFloat(name: any_string): number;
            
            /**
             * @returns value of boolean argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of boolean type
             * @since 3.0
             */
            getBool(name: any_string): boolean;
            
            /**
             * @param center the value to add to the specified floating point value,
             * if the caller used `~` token before it
             * @returns value of relative float argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of relative float type
             * @since 3.0
             */
            getRelativeFloat(name: any_string, center: number): number;
            
            /**
             * @returns value of position argument with integer coordinates by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of integer position type
             * @since 3.0
             */
            getPosition(name: any_string): Vector;
            
            /**
             * @returns value of position argument with floating point coordinates by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of float position type
             * @since 3.0
             */
            getFloatPosition(name: any_string): Vector;
            
            /**
             * @returns value of string argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of string type
             * @since 3.0
             */
            getString(name: any_string): jstring;
            
            /**
             * @returns value of message argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of message type
             * @since 3.0
             */
            getMessage(name: any_string): jstring;
            
            /**
             * @returns value of JSON object argument by given name, or null
             * if an exception occured creating a [[org.json.JSONObject]] instance.
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of JSON type
             * @since 3.0
             */
            getJson(name: any_string): Nullable<org.json.JSONObject>;
            
            /**
             * @returns list of entities chosen using entity selector argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of entity selector type
             * @since 3.0
             */
            getEntities(name: any_string): java.util.List<Actor>;
            
            /**
             * @returns list of players chosen using player selector argument by given name
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of player selector type
             * @since 3.0
             */
            getPlayers(name: any_string): java.util.List<Player>;
            
            /**
             * @returns a single player chosen using player selector argument by given name,
             * or null if there was more than one or no player chosen
             * @throws [[java.lang.IllegalArgumentException]] if the argument by given name
             * doesn't exist in the current command overload, or it's not of player selector type
             * @since 3.0
             */
            getPlayer(name: any_string): Nullable<Player>;
            
            /**
             * @returns integer position of the command caller
             * @since 3.0
             */
            getSourceBlockPosition(): Vector;
            
            /**
             * @returns exact floating point position of the command caller
             * @since 3.0
             */
            getSourceWorldPosition(): Vector;
            
            /**
             * @returns command caller's [[Level]],
             * or null if it doesn't have it for some reason
             * @since 3.0
             */
            getSourceLevel(): Nullable<Level>;
            
            /**
             * @returns [[Dimension]] the command caller's in,
             * or null if it doesn't have it for some reason
             * @since 3.0
             */
            getSourceDimension(): Nullable<Dimension>;
            
            /**
             * @returns command caller's entity object,
             * or null if the caller is not an entity (for example, command block)
             * @since 3.0
             */
            getSourceEntity(): Nullable<Actor>;
            
            /**
             * @returns command caller's player object,
             * or null if the caller is not a player
             * @since 3.0
             */
            getSourcePlayer(): Nullable<Player>;
            
            /**
             * Prints the message of successful command call to the chat.
             * You can omit `msg` param if you just want to mark
             * that the command call went without errors.
             * However, calling this method is optional.
             * @since 3.0
             */
            success(msg?: any_string): void;
            
            /**
             * Prints the error (red color) message and marks
             * that the command call has failed.
             * @since 3.0
             */
            error(msg: any_string): void;

        }

        /**
         * Object to register a command enum by specifying its key-value pairs one by one
         * and then calling `register` method to register the enum itself.
         * 
         * Returned by [[CommandsModule.newEnum]].
         * @since 3.0
         */
        export interface EnumBuilder {
            
            /**
             * Adds a key-value pair to the enum data. Different keys can have the same value.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            add(key: any_string, value: number): EnumBuilder;

            /**
             * Registers the enum after specifying all of its key-value pairs.
             * @since 3.0
             */
            register(): void;

        }

        /**
         * Object to register a string command enum by specifying its values one by one
         * and then calling `register` method to register the enum itself.
         * 
         * Returned by [[CommandsModule.newStringEnum]].
         * @since 3.0
         */
        export interface StringEnumBuilder {

            /**
             * Adds a unique value to the enum values list.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            add(value: any_string): StringEnumBuilder;

            /**
             * Registers the enum after specifying all of its values.
             * @since 3.0
             */
            register(): void;

        }

    }

}
declare module KEX {

    /**
     * Module to register new entity damage sources and death causes,
     * also containing new method to deal damage to the entity,
     * with wider parameters object than in InnerCore's [[Entity.damageEntity]] method.
     * @since 3.0
     */
    export module DamageModule {

        /**
         * Class used to register a custom entity damage source
         * and specify a static or dynamic death message for it.
         * @since 3.0
         */
        export class CustomCause extends java.lang.Object {

            /**
             * Name of the damage source, which you
             * had specified in [[CustomCause]]'s constructor.
             * @since 3.0
             */
            readonly name: jstring;

            /**
             * Numeric ID of the damage source,
             * which is automatically generated when creating a new [[CustomCause]].
             * This ID is generated once and remains the same in the modpack you're currently in.
             * @since 3.0
             */
            readonly id: number;

            /**
             * Constructs new [[CustomCause]] object by given name,
             * automatically registering new damage source in native,
             * and a numeric ID, which will remain the same in the current modpack.
             * @since 3.0
             */
            constructor(name: any_string);

            /**
             * Specifies that the following damage source is of fire type.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setFire(): CustomCause;

            /**
             * Specifies death message for the following damage source.
             * In this overload, the given message is set as the English localization,
             * which will be used by default if you don't add translations to other languages.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setDeathMessage(message: any_string): CustomCause;

            /**
             * Specifies death message for the following damage source.
             * @param translations object with language codes as keys and translations
             * of the death message to the corresponding language as values
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setDeathMessage(translations: { [key: string]: string }): CustomCause;

            /**
             * Specifies dynamic death message depending on the circumstances of the entity damage event,
             * for the following damage source.
             * @param callback function that must return manually generated death message that will be sent in the chat
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            setDeathMessageCallback(callback: CustomTranslationCallback): CustomCause;

        }

        /**
         * @returns whether the damage type of given numeric ID
         * is a fire damage type
         * @since 3.0
         */
        export function isFire(id: number): boolean;

        /**
         * Deals damage to the given entity.
         * Successor to InnerCore's [[Entity.damageEntity]] method,
         * but with wider additional parameters object.
         * @param entity unique ID of the entity to deal damage to
         * @param damage amount of damage (2 damage points = 1 heart)
         * @param cause numeric ID of the damage cause, can be one of [[KEX.EDamageCause]] values,
         * or [[CustomCause.id]] field
         * @param params additional parameters object
         * @since 3.0
         */
        export function damageEntity(entity: number, damage: number, cause: number, params?: DamageDealingParams): void;

        /**
         * Function used in [[CustomCause.setDeathMessageCallback]].
         * @param source object containing circumstances of the entity damage event, which caused the entity's death
         * @param nickname nickname of the entity to print into the death message
         * @param deadEntity the entity who died and needs to send a death message for them in the chat, as an [[Actor]] object
         * @returns manually generated and localized death message, that will be sent in the chat
         * @since 3.0
         */
        export interface CustomTranslationCallback {
            (source: ActorDamageSource, nickname: jstring, deadEntity: Actor): any_string;
        }

        /**
         * Parameters object used in [[DamageModule.damageEntity]] method.
         * @since 3.0
         */
        export interface DamageDealingParams {

            /**
             * Damage source type
             * - omitting this param - common damage
             * - `"actor"` or `"entity"` - damage from an attacking entity
             * - `"blocksource"` or `"world"` - damage from the world
             * - `"block"` - damage from a specific block
             */
            source?: "actor" | "entity" | "blocksource" | "world" | "block";

            /**
             * Unknown param, defaults to false
             */
            bool1?: boolean;

            /**
             * Unknown param, defaults to false
             */
            bool2?: boolean;

            /**
             * Unique ID of the attacker entity, needs to be specified
             * if you put `"actor"` or `"entity"` in [[source]] param.
             */
            attacker?: number;

            /**
             * World object, needs to be specified
             * if you put `"blocksource"` or `"world"` in [[source]] param.
             */
            world?: BlockSource;

            /**
             * Same as [[world]]
             */
            region?: BlockSource;

            /**
             * Coordinates of the block, which dealt the damage,
             * needs to be specified if you put `"block"` in [[source]] param.
             */
            position?: Partial<Vector>;

            /**
             * Same as [[position]]
             */
            pos?: Partial<Vector>;

            /**
             * Same as X coordinate in [[position]]
             */
            x?: number;

            /**
             * Same as Y coordinate in [[position]]
             */
            y?: number;
            
            /**
             * Same as Z coordinate in [[position]]
             */
            z?: number;

        }

    }

}
declare module KEX {

    /**
     * Wrapper for the native `Dimension` class to access
     * some properties associated with the specific dimension of a Minecraft world.
     * @since 1.0
     */
    export interface Dimension extends INativeInterface {

        /**
         * @returns numeric ID of the following [[Dimension]]
         * @since 3.0
         */
        getDimensionId(): number;

        /**
         * @returns [[Level]] object that owns the following [[Dimension]],
         * or null if this [[Dimension]] is not owned by a [[Level]] for some reason.
         * @since 3.0
         */
        getLevel(): Nullable<Level>;

    }

}
/**
 * Extension for InnerCore's
 * <a href="https://docs.mineprogramming.org/api/enums/EItemAnimation.html" target="_blank">EItemAnimation</a>
 * enum adding missing item animation types.
 * @since 2.2
 */
declare enum EItemAnimation {
    NONE = 0,
    EAT = 1,
    DRINK = 2,
    BLOCK = 3,
    CAMERA = 5,
    SPEAR = 6,
    CROSSBOW = 9
}


/**
 * Extension for InnerCore's
 * <a href="https://docs.mineprogramming.org/api/enums/ETileEntityType.html" target="_blank">ETileEntityType</a>
 * @since 3.0
 */
declare enum ETileEntityType {
    NETHER_REACTOR = 3,
    SIGN = 4,
    MOB_SPAWNER = 5,
    SKULL = 6,
    FLOWER_POT = 7,
    ENCHANTING_TABLE = 9,
    DAYLIGHT_DETECTOR = 10,
    MUSIC_BLOCK = 11,
    COMPARATOR = 12,
    DROPPER = 14,
    ITEM_FRAME = 17,
    PISTON = 18,
    CHALKBOARD = 20,
    END_PORTAL = 22,
    END_GATEWAY = 24,
    COMMAND_BLOCK = 26,
    BED = 27,
    BANNER = 28,
    STRUCTURE_BLOCK = 32,
    CHEMISTRY_TABLE = 34,
    CONDUIT_BLOCK = 35,
    JIGSAW = 36,
    BLAST_FURNACE = 38,
    SMOKER = 39,
    BELL = 40,
    CAMPFIRE = 41,
    BARREL = 42,
    BEEHIVE = 43,
    LODESTONE = 44
}


declare module KEX {

    /**
     * Enum listing values of all food saturation modifiers
     * defined by vanilla.
     * @since 2.0
     */
    export enum ESaturationModifier {
        POOR = 0.2,
        LOW = 0.6,
        NORMAL = 1.2,
        GOOD = 1.6,
        MAX = 2.0,
        SUPERNATURAL = 2.4
    }

    /**
     * Enum listing all entity damage cause numeric IDs
     * defined by vanilla.
     * @since 3.0
     */
    export enum EDamageCause {
        NONE = -1,
        OVERRIDE = 0,
        CONTACT = 1,
        ENTITY_ATTACK = 2,
        PROJECTILE = 3,
        SUFFOCATION = 4,
        FALL = 5,
        FIRE = 6,
        FIRE_TICK = 7,
        LAVA = 8,
        DROWNING = 9,
        BLOCK_EXPLOSION = 10,
        ENTITY_EXPLOSION = 11,
        VOID = 12,
        SUICIDE = 13,
        MAGIC = 14,
        WITHER = 15,
        STARVE = 16,
        ANVIL = 17,
        THORNS = 18,
        FALLING_BLOCK = 19,
        PISTON = 20,
        FLY_INTO_WALL = 21,
        MAGMA = 22,
        FIREWORKS = 23,
        LIGHTNING = 24,
        CHARGING = 25,
        TEMPERATURE = 26,
        ALL = 31
    }

    /**
     * Enum to specify integer command argument types
     * in custom command registry.
     * @since 3.0
     */
    export enum EArgumentType {
        INT = 0,
        FLOAT = 1,
        BOOL = 2,
        RELATIVE_FLOAT = 3,
        POSITION = 4,
        FLOAT_POSITION = 5,
        STRING = 6,
        MESSAGE = 7,
        JSON = 8,
        ENTITY = 9,
        PLAYER = 10,
        ENUM = 11,
        STRING_ENUM = 12,
        LITERAL = 13
    }

}
declare module KEX {
    
    /**
     * Object containing all the food properties of the specific item.
     * Returned by [[ItemsModule.getFood]]
     * @since 1.4
     */
    export interface FoodItemComponent extends INativeInterface {

        /**
         * @returns numeric ID of the item that the following [[FoodItemComponent]] is associated with.
         * @since 1.4
         */
        getItem(): number;

        /**
         * @returns the amount of nutrition points added to the player's food stats when eating the food.
         * 2 nutrition = 1 hunger bar.
         * @since 1.4
         */
        getNutrition(): number;

        /**
         * @returns the saturation modifier that is used in calculating the amount of saturation points
         * added to the player's food stats when eating the food.
         * The formula is `saturation = nutrition * saturationModifier`
         * @since 1.4
         */
        getSaturationModifier(): number;

        /**
         * @returns the amount of saturation points added to the player's food stats when eating the food.
         * @since 1.4
         */
        getSaturation(): number;

        /**
         * @returns the name ID of the item, that will be added to the inventory after eating the food
         * (for example, mushroom stew -> `"bowl"`), or null if this item was not specified.
         * @since 1.4
         */
        getUsingConvertsTo(): Nullable<jstring>;

        /**
         * @returns numeric ID of the action that will be performed after eating the food.
         * - -1 -> unknown (not specified)
         * - 0 -> chorus teleport
         * - 1 -> suspicious stew effect
         * @since 1.4
         */
        getOnUseAction(): number;

        /** @since 1.4 */
        getOnUseRange(): Vector;

        /**
         * @returns cooldown type of the following food item, or null if it was not specified.
         * The only known vanilla food cooldown type is `chorusfruit`.
         * @since 1.4
         */
        getCooldownType(): Nullable<jstring>;

        /**
         * @returns cooldown time of the following food item, 0 by default.
         * The only vanilla food item with cooldown time is chorus fruit.
         * @since 1.4
         */
        getCooldownTime(): number;

        /**
         * @returns true if the following food can be eaten even when the player has full food stats.
         * By default this property is false, the only vanilla food items with this property set to true
         * are golden apple and enchanted apple.
         * @since 1.4
         */
        canAlwaysEat(): boolean;

        /**
         * @returns list of potion effects applied to the player when eating the following food.
         * @since 1.4
         */
        getEffects(): java.util.List<FoodItemComponent.Effect>;

        /**
         * @returns list of numeric IDs of potion effects that will be removed
         * from the player if present, when eating the following food.
         * @since 1.4
         */
        getRemoveEffects(): java.util.List<number>;

    }
    
    export module FoodItemComponent {

        /**
         * Object containing data about a single potion effect applied
         * by food, including the chance of applying
         * @since 1.4
         */
        export interface Effect extends java.lang.Object {

            /**
             * @returns name ID of the potion effect, or null if the effect is not valid
             * @since 1.4
             */
            getDescriptionId(): Nullable<jstring>;

            /**
             * @returns numeric ID of the potion effect
             * @since 1.4
             */
            getId(): number;

            /**
             * @returns potion effect object, or null if the effect is not valid
             * @since 1.4
             */
            getEffect(): Nullable<MobEffect>;

            /**
             * @returns potion effect duration
             * @since 1.4
             */
            getDuration(): number;

            /**
             * @returns potion effect amplifier
             * @since 1.4
             */
            getAmplifier(): number;

            /**
             * @returns chance for the potion effect to be applied (1.0 = 100%)
             * @since 1.4
             */
            getChance(): number;

        }

        /**
         * Object used to specify all common food properties and use them somewhere.
         * Currently the only way to use this object is in [[ItemsModule.FoodValuesCallback]] function.
         * @since 3.0
         */
        export class Builder extends java.lang.Object {

            /**
             * Constructs new food properties [[Builder]] object
             * @since 3.0
             */
            constructor();

            /**
             * Sets the amount of nutrition points to be refilled by the food
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            nutrition(nutr: number): Builder;

            /**
             * Sets the food's saturation modifier, used to calculate
             * the amount of saturation points refilled by the food
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            saturationMod(sat: number): Builder;

            /**
             * Sets food's `canAlwaysEat` property to true
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            alwaysEat(): Builder;

            /**
             * Adds potion effect to be applied when eating the food
             * @param eff effect instance object
             * @param chance chance for the effect to be applied, default is 1.0 = 100%
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            effect(eff: MobEffectInstance, chance?: number): Builder;

        }
        
    }

}
declare module KEX {

    /**
     * Module containing some of Minecraft's singleton objects.
     * Most of them must be accessed on the client side, otherwise they return null.
     * @since 2.0
     */
    export module GlobalContext {

        /**
         * @returns [[LocalPlayer]] object of the current minecraft client.
         * Must be called on the client side, otherwise null be returned.
         * @since 2.0
         */
        export function getLocalPlayer(): Nullable<LocalPlayer>;
        
        /**
         * @returns [[Level]] object of the current minecraft client.
         * Should not be used on the server side.
         * @since 3.0
         */
        export function getLevel(): Nullable<Level>;

    }

}
declare module KEX {

    /**
     * Module to get or create vanilla localizations.
     * @since 3.0
     */
    export module I18n {

        /**
         * @returns the given key translated to the current game language,
         * or this key itself, if the translation for it was not found
         * @since 3.0
         */
        export function translate(key: any_string): jstring;

        /**
         * Adds your custom path to localization files directory,
         * to make adding new vanilla translations more convenient than
         * creating the `texts/` directory in an addon.
         * 
         * All files in the given directory must be with `.lang` extension,
         * have the in format `languagecode_REGIONCODE.lang` (like `en_US.lang`, `ru_RU.lang` etc.),
         * and be of key-value type:
         * ```yaml
         * ## Comment
         * key1=translation1
         * key2=translation2
         * ...
         * ```
         * @param dir absolute path to your custom translations directory
         * @since 3.0
         */
        export function addLangDir(dir: any_string): void;

    }

}
/**
 * Extension for InnerCore's 
 * <a href="https://docs.mineprogramming.org/api/modules/Item.html" target="_blank">Item</a>
 * module adding new methods or patching existing ones.
 * @since 1.0
 */
declare namespace Item {

    /**
     * Creates eatable item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @returns object to apply some more additional parameters to the registered item.
     * @since 1.0
     */
    export function createFoodItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: FoodParamsDescription): globalThis.Item.NativeItem;

    /**
     * Creates sword item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 1.0
     */
    export function createSwordItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription): void;

    /**
     * Creates axe item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 1.0
     */
     export function createAxeItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription): void;

     /**
     * Creates pickaxe item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 1.0
     */
    export function createPickaxeItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription): void;

    /**
     * Creates shovel item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 1.0
     */
     export function createShovelItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription): void;

     /**
     * Creates hoe item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 1.0
     */
    export function createHoeItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription): void;

    /**
     * Creates tool item using specified parameters with customized behavior.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @param toolParams object to define tool item's custom behavior using a set of functions called in different moments
     * @since 1.0
     */
    export function createCustomTool(nameID: string, name: string, texture: globalThis.Item.TextureData, params: CommonToolDescription, toolParams?: ExtendedToolParams): void;

    /**
     * Creates shears item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 2.2
     */
    export function createShearsItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: ShearsDescription): void;

    /**
     * Creates flint and steel item using specified parameters.
     * @param nameID string ID of the item. You should register it via [[IDRegistry.genItemID]] first
     * @param name item name in English. Add translations to the name using [[Translation]] module,
     * all translations to the item and block names are applied automatically
     * @param texture texture data used to create item's icon
     * @param params additional item parameters
     * @since 2.2
     */
     export function createFlintAndSteelItem(nameID: string, name: string, texture: globalThis.Item.TextureData, params: FlintAndSteelDescription): void;

    /**
     * Object used in all tool item creation methods.
     * @since 1.0
     */
    export interface CommonToolDescription {

        /**
         * Maximum stack size of the tool item, defaults to 1.
         */
        stack?: number;

        /**
         * If true, the tool item will not be displayed in creative inventory, defaults to false.
         */
        isTech?: boolean;

        /**
         * Tool item's material, you can use string name of the material
         * defined by vanilla or registered by [[ToolAPI.addToolMaterial]] or by creating a [[KEX.ToolsModule.ItemTier]],
         * or you can specify the description object of the new tool material.
         * If you don't specify `name` property in this object, this new material will have
         * name like `__unnamedMaterial{N}`, where `{N}` is an incrementing integer.
         */
        tier?: string | ToolAPI.ToolMaterial;

    }

    /**
     * Object used in [[Item.createShearsItem]] method.
     * @since 2.2
     */
    export interface ShearsDescription extends CommonToolDescription {

        /**
         * Here, when creating a shears item, you can specify only its durability
         * without creating a tool material.
         * In this case, your shears will have the same cutting speed as vanilla shears,
         * but the durability will be different.
         */
        durability?: number;

    }

    /**
     * Object used in [[Item.createFlintAndSteelItem]] method.
     * @since 2.2
     */
    export interface FlintAndSteelDescription extends CommonToolDescription {

        /**
         * When creating a flint and steel item, only durability is needed
         * from tool material params. So specifying a whole tool material
         * here is irrelevant.
         * - If you have created a [[KEX.ToolsModule.ItemTier]] for a set of different
         * tools including the following flint and steel, you can use [[KEX.ToolsModule.ItemTier.getUses]]
         * as a [[durability]] parameter in this object.
         * - If you have created a tool material for a set of different tools including the
         * following flint and steel using [[ToolAPI.addToolMaterial]], you can use [[KEX.ToolsModule.getTierByName]]
         * using your material's name, and then call [[KEX.ToolsModule.ItemTier.getUses]] on the result of the
         * previous method and specify the resulting integer as a [[durability]] parameter in this object.
         */
        tier?: never;

        /**
         * Durability of the flint and steel item
         */
        durability?: number;

    }

    /**
     * Object used in updated [[Item.createFoodItem]] method,
     * containing many properties that weren't accessible before without more low-level code
     * like [[Item.setProperties]].
     * @since 1.0
     */
    export interface FoodParamsDescription {
        
        /**
         * Maximum stack size of the food item, defaults to 64.
         */
        stack?: number;

        /**
         * If true, the food item will not be displayed in creative inventory, defaults to false.
         */
        isTech?: boolean;

        /**
         * Amount of nutrition points refilled by the food item, defaults to 1.
         */
        food?: number;

        /**
         * Same as [[food]].
         */
        nutrition?: number;

        /**
         * Saturation modifier used to calculate amount of saturation points refilled by the food item,
         * by the formula `nutrition * saturationModifier`. Can be one of string types defined by vanilla,
         * custom string type registered with [[ItemsModule.newFoodSaturationModifier]] or a floating point value.
         * Defaults to 1.2 (`"normal"`).
         */
        saturation_modifier?: VanillaFoodSaturationModifiers | string | number;

        /**
         * Adds `is_meat` tag to the food item, which means this item will be able to be eaten by dogs
         * to restore their health. Defaults to false.
         */
        is_meat?: boolean;

        /**
         * Whether the food item can be eaten even if the player has full food stats.
         * Defaults to false.
         */
        can_always_eat?: boolean;

        /**
         * Cooldown the food item is set on after being eaten by a player.
         * Defaults to 0 (no cooldown).
         */
        cooldown_time?: number;

        /**
         * Same as [[cooldown_time]], but using pre-defined string cooldown types
         * instead of integer values. Defaults to `"none"` (no cooldown).
         */
        cooldown_type?: "chorusfruit" | "none";

        /**
         * Unknown property, defaults to `[ 0.0, 0.0, 0.0 ]`.
         */
        on_use_range?: [ number, number, number ];

        /**
         * One of pre-defined string types of action that is performed when the food item is eaten.
         * Defaults to `"none"` (no action).
         */
        on_use_action?: "chorus_teleport" | "suspicious_stew_effect" | "none";

        /**
         * Name ID of the item that the food item is converted to after being eaten. In vanilla it's used,
         * for example, for stews (converted to bowls). Defaults to empty string (doesn't convert to any item).
         */
        using_converts_to?: any_string;

        /**
         * List of potion effects that are added to the player who had eaten the food item.
         */
        effects?: FoodEffect[];

        /**
         * List of numeric IDs of potion effects that are removed from the player who had eaten the food item.
         */
        remove_effects?: number[];

    }

    /**
     * Object used in [[FoodParamsDescription.effects]].
     * Describes a single potion effect added to the player who had eaten a specific food item.
     * @since 1.0
     */
    export interface FoodEffect {

        /**
         * Potion effect's lowercase string name.
         */
        name?: PotionEffectTypes;
        
        /**
         * Potion effect's duration in seconds, defaults to 1.
         */
        duration?: number;

        /**
         * Potion effect's level, defaults to 1.
         */
        amplifier?: number;

        /**
         * Chance for this potion effect to be applied, defaults to 1.0 (100%).
         */
        chance?: number;

    }

    /**
     * Interface extending InnerCore's [[ToolAPI.ToolParams]]
     * and adding new method for custom tools with volatile attack damage value
     * depending on the item instance.
     * @since 1.0
     */
    export interface ExtendedToolParams extends ToolAPI.ToolParams {

        /**
         * @returns attack damage value used instead of the tool material's `attackDamageBonus` value,
         * calculated depending on the given [[ItemInstance]].
         * @param attacker **_Added in 5.0_**. Unique ID of the player entity which attacked another entity.
         * Set to 0 when this method is not called within an attack event.
         * @param victim **_Added in 5.0_**. Unique ID of the entity which was attacked by the player.
         * Set to 0 when this method is not called within an attack event.
         * @since 1.0
         */
        getAttackDamageBonus?: (item: ItemInstance, attacker: number, victim: number) => number;

    }

}
declare module KEX {

    /**
     * Successor to the
     * <a href="https://github.com/DMHYT/LIBS/tree/master/source/ItemAnimHelper" target="_blank">ItemAnimHelper</a>
     * library, rewritten to Java and restructured.
     * @since 3.0
     */
    export module ItemAnimHelper {

        /**
         * Creates simple textures from given animated item texture from PC ('tall' texture)
         * @param sourcePath absolute path to the 'tall' texture
         * @param resultPath absolute path to the result textures (they will be with different meta and same name)
         * @since 3.0
         */
        export function convertTexture(sourcePath: any_string, resultPath: any_string): void;
        
        /**
         * The texture of the item with given ID will animate between given intervals in ticks
         * @param id numeric ID of the item to apply the animated icon to
         * @param textureName name of your item's texture without `_meta.png`
         * @param ticks how many ticks must pass between changing item texture animation frame
         * @param frames how many frames does the item texture animation have
         * @since 3.0
         */
        export function makeCommonAnim(id: number, textureName: any_string, ticks: number, frames: number): void;
        
        /**
         * The texture of the item with given ID will change its animation frames according to frame numbers array which you will specify
         * @param id numeric ID of the item to apply the animated icon to
         * @param textureName name of your item's texture without `_meta.png`
         * @param interval interval between which the texture will change its frame
         * @param frames frames that texture will be being changed to, every update interval
         * @since 3.0
         */
        export function makeAdvancedAnim(id: number, textureName: any_string, interval: number, frames: number[]): void;
        
    }

}
declare module KEX {

    /**
     * A module that adds bunch of new features
     * that can be applied to vanilla or custom items.
     * Remember that not all the methods support vanilla items,
     * because of some technical peculiarities.
     * @since 1.0
     */
    export module ItemsModule {

        /**
         * If this property is set to true, the item with given ID
         * won't be usable in adventure mode, by default it's false.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setRequiresWorldBuilder(id: number, requiresWorldBuilder: boolean): void;

        /**
         * If this property is set to true, the item with given ID
         * will be immune to any type of explosion.
         * The only vanilla item with this property set to true is nether star.
         * By default it's false.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setExplodable(id: number, explodable: boolean): void;

        /**
         * If this property is set to true, the item with given ID
         * will be immune to fire and lava. Talking about the vanilla items,
         * the only items having this property set to true are netherite ingot, tools and armor.
         * By default it's false.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setFireResistant(id: number, fireResistant: boolean): void;

        /**
         * If this property is set to true, the item with given ID
         * will not despawn in a certain period of time after it was dropped on the ground and not picked up by anyone.
         * There are no vanilla items with this property set to false, by default it's true.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setShouldDespawn(id: number, shouldDespawn: boolean): void;

        /**
         * If this property is set to true, the icon of the item with given ID
         * will be horizontally mirrored in container slots. By default it's false.
         * Some of the vanilla items with this property set to true are fishing rod and carrot on a stick.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setIsMirroredArt(id: number, isMirroredArt: boolean): void;

        /**
         * Sets the amount of items that can be smelt with a single item of given ID as a fuel.
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setFurnaceBurnIntervalMultiplier(id: number, multiplier: number): void;

        /**
         * Sets the multiplier that will be used in calculating the amount of experience to add to a player
         * (or to drop from a broken furnace) after smelting the item with given ID (the method must be applied
         * to the result and not to the ingredient).
         * Default value is 0.0, cooked meat has 0.35, golden ingot has 1.0 (1.0 = 100% chance of dropping any XP)
         * @param id numeric ID of the item to apply this property to, vanilla supported
         * @since 1.0
         */
        export function setFurnaceXPMultiplier(id: number, multiplier: number): void;

        /**
         * Calling this method prevents the item with given ID to be repaired in anvil
         * using any material or these items paired. This can be used, for example, with electric tools.
         * @param id numeric ID of the item to apply this property to, vanilla **NOT** supported
         * @since 1.0
         */
        export function setCannotBeRepairedInAnvil(id: number): void;

        /**
         * @returns true if the item with given ID is a food, false otherwise
         * @since 1.4
         */
        export function isFood(id: number): boolean;

        /**
         * @returns object containing food properties of the item with given ID,
         * or null if the item is not a food
         * @since 1.4
         */
        export function getFood(id: number): Nullable<FoodItemComponent>;

        /**
         * Registers new string food saturation modifier that can be used in food properties JSON object.
         * Currently there are 6 pre-defined modifiers in vanilla:
         * - `"poor"` - 0.2
         * - `"low"` - 0.6
         * - `"normal"` - 1.2
         * - `"good"` - 1.6
         * - `"max"` - 2.0
         * - `"supernatural"` - 2.4
         * @since 1.4
         */
        export function newFoodSaturationModifier(name: any_string, value: number): void;

        /**
         * @returns floating point value of food saturation modifier by given name,
         * or 1.2 (value of `"normal"` modifier) if the modifier by this name is not defined
         * @since 1.4
         */
        export function saturationModifierFromString(name: any_string): number;

        /**
         * Sets dynamic maximum use duration for the item with given ID,
         * depending on the contents of the item instance.
         * @param id numeric ID of the item to apply this callback to, vanilla **NOT** supported
         * @param callback function that takes the item instance and must return max use duration value for it
         * @since 2.2
         */
        export function setMaxUseDurationDynamic(id: number, callback: UseDurationCallback): void;

        /**
         * Adds custom modification to the item tooltip. It is better than InnerCore's [[Item.registerNameOverrideFunction]],
         * because exactly the hover text and not the item name is being modified.
         * @param id numeric ID of the item to apply this callback to, vanilla supported
         * @param callback function that takes tooltip represented by the list of strings, which you can modify in any way, as the second parameter,
         * and also item instance as the first parameter and [[Level]] object as the third
         * @param priority callback priority, the more it is, the earlier than other callbacks your callback will be called, default is 0
         * @param isCallbackForced default is true, you can set it to false, if your tooltip doesn't have any volatile components,
         * then your tooltip will be called 4 times less often than the ones with this param set to true, which will reduce a tiny performance loss.
         * @since 3.0
         */
        export function addTooltip(id: number, callback: OnTooltipCallback, priority?: number, isCallbackForced?: boolean): void;

        /**
         * Sets dynamic food properties for the item with given ID,
         * depending on the contents of the item instance.
         * @param id numeric ID of the item to apply this callback to, vanilla supported
         * @param callback function that takes the item instance and must return the food properties object builder
         * with all needed properties specified for it
         * @since 3.0
         */
        export function setDynamicFoodValues(id: number, callback: FoodValuesCallback): void;

        /**
         * Sets the given [[ReachDistanceModifier]] object to be enabled when the player is holding
         * the item with given ID in their hand.
         * @param id numeric ID of the item to apply the modifier to, vanilla supported
         * @since 3.0
         */
        export function registerReachDistanceModifierFor(id: number, modifier: ReachDistanceModifier): void;
        
        /**
         * Function used in [[ItemsModule.setMaxUseDurationDynamic]] method
         * @param stack item instance, for which the callback was called
         * @returns use duration for the given item instance
         * @since 2.2
         */
        export interface UseDurationCallback {
            (stack: ItemInstance): number;
        }

        /**
         * Function used in [[ItemsModule.addTooltip]] method
         * @param stack item instance, for which the callback was called
         * @param text tooltip represented by the list of strings (divided by line breaks).
         * You can modify it in any way: change the existing elements, add yours and remove elements.
         * @param level [[Level]] object to get some additional data
         * @since 3.0
         */
        export interface OnTooltipCallback {
            (stack: ItemInstance, text: java.util.List<jstring>, level: Level): void;
        }

        /**
         * Function used in [[ItemsModule.setDynamicFoodValues]] method
         * @param stack item instance, for which the callback was called
         * @returns food properties object builder with all needed properties specified for the given item instance
         * @since 3.0
         */
        export interface FoodValuesCallback {
            (stack: ItemInstance): FoodItemComponent.Builder;
        }

    }

}
declare module KEX {

    /**
     * Wrapper for the native `Level` class to access
     * some properties associated with the whole Minecraft world.
     * @since 1.0
     */
    export interface Level extends INativeInterface {

        /**
         * @returns [[TickingAreasManager]] object for the following [[Level]],
         * or null if this [[Level]] doesn't have it.
         * Remember that only server level instances have their [[TickingAreasManager]].
         * @since 3.0
         */
        getTickingAreasManager(): Nullable<TickingAreasManager>;

        /**
         * @returns true if the following [[Level]] is client, false if it's server
         * @since 4.0
         */
        isClientSide(): boolean;

    }

}
declare module KEX {

    /**
     * Wrapper for the native `LocalPlayer` class extending [[Player]]
     * and adding some new methods associated specifically with the client-side player entity.
     * 
     * You can construct new [[LocalPlayer]] from an existing [[Actor]], [[Mob]] or [[Player]],
     * or call [[Actor.asLocalPlayer]].
     * 
     * First will throw [[java.lang.IllegalArgumentException]],
     * second will return null, if given [[Actor]], [[Mob]] or [[Player]] is not a [[LocalPlayer]].
     * @since 2.0
     */
    export class LocalPlayer extends Player {

        /**
         * Constructs new [[LocalPlayer]] object from given entity unique ID.
         * Use [[Actor.isValid]] and [[Actor.isLocalPlayer]] first, to check if entity with
         * this ID exists and it's a [[LocalPlayer]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 2.0
         */
        constructor(entity: number);

        /**
         * Constructs new [[LocalPlayer]] object from an existing [[Player]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Player]] is not a [[LocalPlayer]].
         * You should better use [[Actor.asLocalPlayer]], that will return null in case your [[Player]] is not a [[LocalPlayer]].
         * @since 2.0
         */
        constructor(player: Player);

        /**
         * Constructs new [[LocalPlayer]] object from an existing [[Mob]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Mob]] is not a [[LocalPlayer]].
         * You should better use [[Actor.asLocalPlayer]], that will return null in case your [[Mob]] is not a [[LocalPlayer]].
         * @since 2.0
         */
        constructor(mob: Mob);

        /**
         * Constructs new [[LocalPlayer]] object from an existing [[Actor]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Actor]] is not a [[LocalPlayer]].
         * You should better use [[Actor.asLocalPlayer]], that will return null in case your [[Actor]] is not a [[LocalPlayer]].
         * @since 2.0
         */
        constructor(actor: Actor);

        /**
         * @returns [[MoveInputHandler]] object of the following [[LocalPlayer]],
         * or null if this [[LocalPlayer]] doesn't have it for some reason.
         * @since 2.0
         */
        getMoveInputHandler(): Nullable<MoveInputHandler>;

        /**
         * @returns whether the following [[LocalPlayer]] is flying at the moment
         * @since 2.0
         */
        isFlying(): boolean;

    }

}
declare module KEX {

    /**
     * A module that adds a wide set of features
     * with loot tables, for example: modifying vanilla loot tables
     * (so that loot in dungeon chests and drops from killed mobs changes),
     * filling containers like chests and barrels with a loot table,
     * getting list of randomly chosen items from a loot table etc.
     * @since 1.0
     */
    export module LootModule {

        /**
         * Adds a new modifier to the loot table with given name.
         * @param tableName path to the loot table, relative to `<behavior_pack>/loot_tables/` and without `.json`
         * @returns [[LootModifier]] object containing loads of functions
         * to modify the loot table how you wish
         * @since 1.0
         * @since 4.0 you can use full loot table dir in `tableName` parameter, same as in the rest of the module's methods
         */
        export function createLootTableModifier(tableName: any_string): LootModifier;

        /**
         * @returns empty [[LootConditions]] to use in loot entry function description
         * @since 1.0
         */
        export function createConditionsList(): LootConditions;

        /**
         * Adds new item that can be dropped when bartering with piglins.
         * Actually it's a wrapper over [[createLootTableModifier]],
         * but it's made differently to prevent bugs in bartering logics,
         * because `piglin_barter` loot table has unusual structure:
         * only one pool and one list of items, and as [[createLootTableModifier]]
         * creates new pools, using it here may cause incorrect work.
         * Here is an example:
         * ```js
         * KEX.LootModule.addPiglinBarteringItem()
         *  .describeItem(VanillaItemID.netherite_ingot)
         *  .setCount(32, 64)
         *  .setWeight(1000);
         * ```
         * It's important to notice, that `weight` is mandatory here, otherwise the item
         * will be ignored during the modification. In vanilla piglin bartering list,
         * values from 1 (netherite hoe) to 40 (gravel, leather, nether bricks and other cheap stuff) are used.
         * Based on this, you can understand which `weight` values you should use.
         * @returns [[LootEntry]] object to describe the item
         * @since 1.2
         */
        export function addPiglinBarteringItem(): LootEntry;

        /**
         * Adds a function that will be called right after the list of randomly chosen items from a loot table is created.
         * The function has access to this list and to the loot call circumstances object.
         * @param tableName path to the loot table, can be shortened like in [[createLootTableModifier]], and full like `loot_tables/path/name.json`
         * @param cb function to be called after the items list is chosen by vanilla
         * @param priority callback priority, the more it is, the earlier than other callbacks your callback will be called, default is 0
         * @since 1.2
         * @since 4.0 you can use full loot table dir in `tableName` parameter, same as in the rest of the module's methods
         */
        export function addOnDropCallbackFor(tableName: any_string, cb: OnDropCallback, priority?: number): void;

        /**
         * Fills vanilla container on given coords, with items randomly chosen from given loot table.
         * Currently only chest, hopper, dispenser, dropper and barrel are supported, it'll be improved in future.
         * @param region [[BlockSource]] object of the dimension where the block is located
         * @param tableName path to the loot table, can be shortened like in [[createLootTableModifier]], and full like `loot_tables/path/name.json`
         * @param actor entity that will be used as `ThisEntity` in [[LootTableContext]] object created internally.
         * @since 3.0
         */
        export function fillContainer(region: BlockSource, x: number, y: number, z: number, tableName: any_string, actor: Nullable<Actor>): void;

        /**
         * Creates the list of randomly chosen items from given loot table using given circumstances object, and returns it.
         * [[OnDropCallback]]s are also triggered when you use this method.
         * @param tableName path to the loot table, can be shortened like in [[createLootTableModifier]], and full like `loot_tables/path/name.json`
         * @param context [[LootTableContext]] object to add circumstances to the loot event.
         * You have to create a [[LootTableContext.Builder]] and then call its method `create`, that returns the [[LootTableContext]].
         * @returns the resulting [[java.util.List]] of items
         * @since 3.0
         */
        export function getRandomItems(tableName: any_string, context: LootTableContext): java.util.List<ItemInstance>;

        /**
         * Forces the given loot table to be loaded as soon as the player enters the world.
         * 
         * As an element of optimization, the loot tables in Minecraft are not loaded all together at the same time.
         * A single loot table is deserialized from its JSON file when a mob with this loot table is killed or
         * a chest with it is opened for the first time in the current session.
         * 
         * This creates inconveniences for the developers that need the data from a loot table immediately
         * (for example, for a RecipeViewer addon using [[LootModifier]]'s post-modify callbacks).
         * 
         * This method is a solution. It forces loot table's deserialization in `LevelDisplayed` callback.
         * @param tableName path to the loot table, can be shortened like in [[createLootTableModifier]], and full like `loot_tables/path/name.json`
         * @since 3.0
         */
        export function forceLoad(tableName: any_string): void;

        /**
         * Adds new loot pool condition that you can add to `"conditions"` array in your loot table's JSON,
         * and specify its behavior without any limits in your code.
         * @param conditionName name of the condition that will have to be put in `"condition"` param of condition's JSON object.
         * @param callback function to be called on the loot pool that owns this condition and must return true or false,
         * depending on whether the condition was met or not
         * @since 4.0
         */
        export function registerCustomLootCondition(conditionName: any_string, callback: CustomLootConditionCallback): void;

        /**
         * Adds new loot pool condition that you can add to `"conditions"` array in your loot table's JSON,
         * and specify its behavior without any limits in your code.
         * 
         * Same as [[registerCustomLootCondition]], but the function's first parameter is a JS object
         * of condition's JSON description instead of [[org.json.JSONObject]].
         * @param conditionName name of the condition that will have to be put in `"condition"` param of condition's JSON object.
         * @param callback function to be called on the loot pool that owns this condition and must return true or false,
         * depending on whether the condition was met or not
         * @since 4.0
         */
        export function registerCustomLootConditionJS(conditionName: any_string, callback: CustomLootConditionCallbackJS): void;

        /**
         * Adds new loot entry function that you can add to `"functions"` array in your loot table's JSON,
         * and specify its behavior without any limits in your code.
         * @param functionName name of the function that will have to be put in `"function"` param of function's JSON object.
         * @param callback function to be called on the item that owns this function, it provides you with all needed parameters.
         * @since 3.0
         */
        export function registerCustomLootFunction(functionName: any_string, callback: CustomLootFunctionCallback): void;

        /**
         * Adds new loot entry function that you can add to `"functions"` array in your loot table's JSON,
         * and specify its behavior without any limits in your code.
         * 
         * Same as [[registerCustomLootFunction]], but the function's first parameter is a JS object
         * of function's JSON description instead of [[org.json.JSONObject]].
         * @param functionName name of the function that will have to be put in `"function"` param of function's JSON object.
         * @param callback function to be called on the item that owns this function, it provides you with all needed parameters.
         * @since 3.0
         */
        export function registerCustomLootFunctionJS(functionName: any_string, callback: CustomLootFunctionCallbackJS): void;

        /**
         * Runs the loot pool condition for your internal purposes
         * @param json JSON description of the condition represented as an [[org.json.JSONObject]].
         * You must have the `"condition"` field in it with the string identifier of the condition,
         * in order for the method to determine and validate it.
         * @param context [[LootTableContext]] object with the circumstances of the loot event. You can use
         * a [[LootTableContext]] object provided to you by one of [[LootModule]] callbacks,
         * or create and customize it yourself using [[LootTableContext.Builder]].
         * @returns true or false depending on whether the condition was met or not.
         * Returns false if the condition's JSON description is invalid.
         * @since 4.0
         */
        export function runLootCondition(json: org.json.JSONObject, context: LootTableContext): boolean;

        /**
         * Runs the loot pool condition for your internal purposes
         * @param json JSON description of the condition represented as a JS object.
         * You must have the `"condition"` field in it with the string identifier of the condition,
         * in order for the method to determine and validate it.
         * @param context [[LootTableContext]] object with the circumstances of the loot event. You can use
         * a [[LootTableContext]] object provided to you by one of [[LootModule]] callbacks,
         * or create and customize it yourself using [[LootTableContext.Builder]].
         * @returns true or false depending on whether the condition was met or not.
         * Returns false if the condition's JSON description is invalid.
         * @since 4.0
         */
        export function runLootCondition(json: {
            condition: any_string,
            [key: string]: any
        }, context: LootTableContext): boolean;

        /**
         * Function used in [[LootModule.registerCustomLootCondition]].
         * @param json [[org.json.JSONObject]] representation of loot pool condition's JSON description
         * @param context [[LootTableContext]] object to access the circumstances of the loot event
         * @since 4.0
         */
        export interface CustomLootConditionCallback {
            (json: org.json.JSONObject, context: LootTableContext): boolean;
        }

        /**
         * Function used in [[LootModule.registerCustomLootConditionJS]].
         * @param json JS object representation of loot pool condition's JSON description.
         * @param context [[LootTableContext]] object to access the circumstances of the loot event
         * @since 4.0
         */
        export interface CustomLootConditionCallbackJS {
            (json: {
                condition: jstring,
                [key: string]: any
            }, context: LootTableContext): boolean;
        }

        /**
         * Function used in [[LootModule.registerCustomLootFunction]].
         * @param json [[org.json.JSONObject]] representation of loot entry function's JSON description.
         * @param stack item to modify by your function
         * @param context [[LootTableContext]] object to access the circumstances of the loot event
         * @since 3.0
         */
        export interface CustomLootFunctionCallback {
            (json: org.json.JSONObject, stack: ItemInstance, context: LootTableContext): void;
        }

        /**
         * Function used in [[LootModule.registerCustomLootFunctionJS]].
         * @param json JS object representation of loot entry function's JSON description.
         * @param stack item to modify by your function
         * @param context [[LootTableContext]] object to access the circumstances of the loot event
         * @since 3.0
         */
        export interface CustomLootFunctionCallbackJS {
            (json: {
                function: jstring,
                [key: string]: any
            }, stack: ItemInstance, context: LootTableContext): void;
        }
        
        /**
         * Function used in [[LootModule.addOnDropCallbackFor]].
         * @param drops list of items randomly chosen by vanilla, which you can modify how you want.
         * Remember to call [[RandomItemsList.markChanged]] method, if you use some its methods
         * except `addItem` and `remove(int index)`.
         * @param context [[LootTableContext]] object to access the information about entity death or chest opening.
         * @since 1.2
         */
        export interface OnDropCallback {
            (drops: RandomItemsList, context: LootTableContext): void;
        }

        /**
         * Object extending [[java.util.ArrayList]] and representing list of randomly chosen items
         * from a loot table, which you can modify in [[OnDropCallback]], also having access
         * to [[KEX.LootTableContext]] object with all information about entity death or chest opening.
         * @since 1.2
         */
        export interface RandomItemsList extends java.util.ArrayList<ItemInstance>, INativeInterface {
            
            /**
             * This method needs to be called when you call something except [[addItem]] and [[remove]],
             * Otherwise your modifications will not affect the loot table's result.
             * This class will be improved in future so you won't have to use it.
             * @since 1.2
             */
            markChanged(): void;
            
            /**
             * Adds new item to the list by given numeric ID, count, data and additionally extra.
             * It's recommended to use exactly this method instead of [[add]] method from [[java.util.ArrayList]]
             * when you're in JS, because the ArrayList actually consists of ItemStack Java objects,
             * not the [[ItemInstance]]s as JS-objects.
             * @since 1.2
             */
            addItem(id: number, count: number, data: number, extra?: Nullable<ItemExtraData>): void;

        }

        /**
         * Object returned by [[LootModule.createLootTableModifier]] method,
         * used to modify a specific loot table in different ways, like adding
         * your custom JSON, adding exactly items or registering a callback
         * called after the modifications listed above, to modify the resulting
         * JSON object one more time, having access to all of its content.
         * 
         * The most weighty feature of [[LootModifier]] is a class system,
         * that repeats Minecraft loot tables JSON format (a `loot table` consists of
         * `pools`, each `pool` has its `conditions`, `tiers` and `entries`, etc.)
         * 
         * Here is an example of using this system - repeating vanilla zombie loot table with it:
         * ```js
         * KEX.LootModule.createLootTableModifier("entities/zombie")
         *  .createNewPool()
         *      .addEntry()
         *          .describeItem("minecraft", "rotten_flesh")
         *          .setWeight(1)
         *          .setCount(0, 2)
         *          .beginFunctions()
         *              .addLootingEnchantFunction(0, 1)
         *          .endFunctions()
         *      .endEntry()
         *  .endPool()
         *  .createNewPool()
         *      .addEntry()
         *          .describeItem("minecraft", "iron_ingot")
         *          .setWeight(1)
         *          .setCount(1)
         *      .endEntry()
         *      .addEntry()
         *          .describeItem("minecraft", "carrot")
         *          .setWeight(1)
         *          .setCount(1)
         *      .endEntry()
         *      .beginConditions()
         *          .addKilledByPlayerCondition()
         *          .addRandomChanceWithLootingCondition(0.025, 0.01)
         *      .endConditions()
         *  .endPool();
         * ```
         * @since 1.0
         */
        export interface LootModifier {

            /**
             * After calling this method, all the further modifications applied to the following [[LootModifier]]
             * (basically all of its methods) will be ignored. Worth noticing that the [[LootModifier]] on which
             * the [[lock]] method was called, **cannot be unlocked**.
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            lock(): LootModifier;

            /**
             * @returns whether the following [[LootModifier]] had the [[lock]] method called on it at least once
             * @since 4.0
             */
            isLocked(): boolean;

            /**
             * Adds new loot pool to the loot table with 1 roll
             * 
             * - Roll is an action of generating a list of randomly chosen items from the loot pool,
             * after all the rolls the lists are merged and dropped from the mob or put into the chest.
             * @returns [[LootPool]] object to describe the created pool
             * @since 1.0
             */
            createNewPool(): LootPool;

            /**
             * Adds new loot pool to the loot table with given number of rolls
             * 
             * - Roll is an action of generating a list of randomly chosen items from the loot pool,
             * after all the rolls the lists are merged and dropped from the mob or put into the chest.
             * @returns [[LootPool]] object to describe the created pool
             * @since 1.0
             */
            createNewPool(rolls: number): LootPool;

            /**
             * Adds new loot pool to the loot table with the number of rolls
             * that is chosen randomly every time between given minimum and maximum value.
             * 
             * - Roll is an action of generating a list of randomly chosen items from the loot pool,
             * after all the rolls the lists are merged and dropped from the mob or put into the chest.
             * @returns [[LootPool]] object to describe the created pool
             * @since 1.0
             */
            createNewPool(minRolls: number, maxRolls: number): LootPool;

            /**
             * You can store loot table modification data as a JSON file of Minecraft loot table format,
             * somewhere in your mod's directory. Here you specify the absolute path to this JSON file
             * and all its contents will be added to the following [[LootModifier]].
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            modifyWithAnotherTable(path: any_string): LootModifier;

            /**
             * Here you can specify loot table modification data represented as a JS object of Minecraft loot table format,
             * and all its contents will be added to the following [[LootModifier]].
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            modifyWithJSON(json: LootTableTypes.JsonFormat): LootModifier;

            /**
             * Adds new item by given numeric ID to the loot table.
             * @param count item count, can be fixed integer or object with minimum and maximum possible values
             * @param chance chance for this item to be dropped, value between 0.0 (0%) and 1.0 (100%)
             * @param rolls number of rolls, defaults to 1
             * - Roll is an action of generating a list of randomly chosen items from the loot pool,
             * after all the rolls the lists are merged and dropped from the mob or put into the chest.
             * 
             * This method is actually a shortcut, which looks like this:
             * ```java
             * LootPool pool = this.createNewPool(rolls)
             *  .addEntry()
             *      .describeItem(id)
             *      .setCount(count)
             *      .setData(data)
             *  .endEntry();
             * if(chance < 1.0f)
             * {
             *  pool.beginConditions()
             *      .addRandomChanceCondition(chance)
             *  .endConditions();
             * }
             * return this;
             * ```
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addItem(id: number, count: number | MinMax, data: number, chance: number, rolls?: number | MinMax): LootModifier;

            /**
             * Adds new item by given string namespace and identifier to the loot table.
             * @param count item count, can be fixed integer or object with minimum and maximum possible values
             * @param chance chance for this item to be dropped, value between 0.0 (0%) and 1.0 (100%)
             * @param rolls number of rolls, defaults to 1
             * This method is actually a shortcut, which looks like this:
             * ```java
             * LootPool pool = this.createNewPool(rolls)
             *  .addEntry()
             *      .describeItem(namespace, identifier)
             *      .setCount(count)
             *      .setData(data)
             *  .endEntry();
             * if(chance < 1.0f)
             * {
             *  pool.beginConditions()
             *      .addRandomChanceCondition(chance)
             *  .endConditions();
             * }
             * return this;
             * ```
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addAddonItem(namespace: any_string, identifier: any_string, count: number | MinMax, data: number, chance: number, rolls?: number | MinMax): LootModifier;

            /**
             * Adds a callback called right after common modifications
             * which you can use to modify the resulting loot table JSON object
             * one more time, having access to all of its content.
             * @param cb function that provides you with loot table JSON object represented as a JS object,
             * which you can modify how you wish
             * @param priority callback priority, the more it is, the earlier than other callbacks your callback will be called, default is 0
             * @returns reference to itself to be used in sequential calls
             * @since 1.2
             */
            addJSModifyCallback(cb: JSModifyCallback, priority?: number): LootModifier;

            /**
             * Adds a callback called right after common modifications
             * which you can use to modify the resulting loot table JSON object
             * one more time, having access to all of its content.
             * @param cb function that provides you with loot table JSON object represented as an [[org.json.JSONObject]] instance,
             * which you can modify how you wish
             * @param priority callback priority, the more it is, the earlier than other callbacks your callback will be called, default is 0
             * @returns reference to itself to be used in sequential calls
             * @since 1.2
             */
            addJSONModifyCallback(cb: JSONModifyCallback, priority?: number): LootModifier;

            /**
             * Adds a callback called after common modifications and modify callbacks
             * which you can use to read the resulting loot table JSON object
             * after all modifications, in order to, for example, save some data from it for your personal needs
             * @param cb function that provides you with loot table JSON object represented as a JS object.
             * Modifying it doesn't make any effect, because every callback is called using a copy of the loot table JSON object.
             * @returns reference to itself to be used in sequential calls
             * @since 1.2
             */
            addJSPostModifyCallback(cb: JSModifyCallback): LootModifier;
            
            /**
             * Adds a callback called after common modifications and modify callbacks
             * which you can use to read the resulting loot table JSON object
             * after all modifications, in order to, for example, save some data from it for your personal needs
             * @param cb function that provides you with loot table JSON object represented as an [[org.json.JSONObject]] instance.
             * Modifying it doesn't make any effect, because every callback is called using a copy of the loot table JSON object.
             * @returns reference to itself to be used in sequential calls
             * @since 1.2
             */
            addJSONPostModifyCallback(cb: JSONModifyCallback): LootModifier;

        }

        /**
         * Function used in [[LootModifier.addJSModifyCallback]] and [[LootModifier.addJSPostModifyCallback]].
         * @param obj loot table JSON object represented as a JS object,
         * remember that modifying it makes sense only in [[LootModifier.addJSModifyCallback]].
         * @since 1.2
         */
        export interface JSModifyCallback {
            (obj: LootTableTypes.JsonFormat): void;
        }

        /**
         * Function used in [[LootModifier.addJSONModifyCallback]] and [[LootModifier.addJSONPostModifyCallback]].
         * @param obj loot table JSON object represented as an [[org.json.JSONObject]] instance,
         * remember that modifying it makes sense only in [[LootModifier.addJSModifyCallback]].
         * @since 1.2
         */
        export interface JSONModifyCallback {
            (obj: org.json.JSONObject): void;
        }

        /**
         * Object representing one of the pools of a loot table.
         * Returned by [[LootModifier.createNewPool]].
         * @since 1.0
         */
        export interface LootPool {

            /**
             * @returns [[LootConditions]] object to add new conditions to the following [[LootPool]].
             * See [[LootConditions]] description for more details about these conditions.
             * @since 1.0
             */
            beginConditions(): LootConditions;

            /**
             * @returns [[LootTiers]] object to add some additional properties to the following [[LootPool]].
             * @since 1.0
             */
            beginTiers(): LootTiers;

            /**
             * Creates new entry (item) in the following [[LootPool]].
             * @returns [[LootEntry]] object to describe it
             * @since 1.0
             */
            addEntry(): LootEntry;

            /**
             * @returns [[LootModifier]] that owns the following [[LootPool]].
             * Use this in sequential call when you finish describing the loot pool.
             * @since 1.0
             */
            endPool(): LootModifier;

        }

        /**
         * Object representing the list of conditions of a loot pool.
         * They are used when generating a list of randomly chosen items:
         * the items will be chosen only if all the conditions pass.
         * Returned by [[LootPool.beginConditions]].
         * - If you need to put [[LootConditions]] in loot entry function object,
         * use [[KEX.LootModule.createConditionsList]], which creates
         * an empty [[LootConditions]] object and returns it.
         * @since 1.0
         */
        export interface LootConditions {

            /**
             * Adds a condition checking if the killed entity was on fire (or not if `onFire` parameter is set to false).
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEntityOnFireCondition(onFire: boolean): LootConditions;

            /**
             * Adds a condition checking if the killed entity was on ground (or not if `onGround` parameter is set to false).
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEntityOnGroundCondition(onGround: boolean): LootConditions;

            /**
             * Adds a condition checking the killed entity being on fire and on ground at the moment of its death.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEntityPropertiesCondition(onFire: boolean, onGround: boolean): LootConditions;

            /**
             * Adds a condition checking the killed entity for a specific mark variant.
             * 
             * Mark variant is a value used to be bound to some entity's visual properties or addon-defined component groups.
             * In vanilla it's used, for example, in villagers' clothes depending on their biome,
             * type of flower that was given to mooshroom, tropical fish skin pattern etc.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addMarkVariantCondition(markVariant: number): LootConditions;

            /**
             * Adds a condition checking if the entity was killed by a player.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addKilledByPlayerCondition(): LootConditions;

            /**
             * Adds a condition checking if the entity was killed by a player or one of their pets.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addKilledByPlayerOrPetsCondition(): LootConditions;

            /**
             * Adds a condition that passes only with the given chance.
             * The chance can be specified with one fixed or two minimum and maximum values.
             * Values must be between 0.0 (0%) and 1.0 (100%).
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomChanceCondition(chance: number, maxChance?: number): LootConditions;

            /**
             * Adds a condition that passes only with the given chance plus
             * additional chance got from looting enchantment.
             * Values must be between 0.0 (0%) and 1.0 (100%).
             * @param chance base chance of condition passing
             * @param lootingMultiplier value that will be added to the chance for each looting level
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomChanceWithLootingCondition(chance: number, lootingMultiplier: number): LootConditions;

            /**
             * Adds a condition that passes only with one of given chances
             * depending on the game difficulty.
             * Values must be between 0.0 (0%) and 1.0 (100%).
             * @param defaultChance mandatory value that is used when some of the chance values for specific difficulty is not specified
             * @param easy chance of condition passing on easy game difficulty
             * @param normal chance of condition passing on normal game difficulty
             * @param hard chance of condition passing on hard game difficulty
             * @param peaceful chance of condition passing on peaceful game difficulty
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomDifficultyChanceCondition(defaultChance: number, easy?: number, normal?: number, hard?: number, peaceful?: number): LootConditions;

            /**
             * Adds a condition that passes only with the given chance
             * multiplied by level's current special modifier,
             * which formula is not known at the moment.
             * The chance's value must be between 0.0 (0%) and 1.0 (100%).
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomRegionalDifficultyChanceCondition(maxChance: number): LootConditions;

            /**
             * Adds condition registered using [[LootModule.registerCustomLootCondition]] or [[LootModule.registerCustomLootConditionJS]].
             * 
             * You don't need to specify condition's name in `"condition"` param of JSON description, it's internally put there.
             * 
             * In fact, you can use this method not only with KEX-registered conditions, but also,
             * for example, with vanilla ones that are currently not supported by [[LootConditions]].
             * @param json condition's JSON description as an [[org.json.JSONObject]]
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            addCustomCondition(conditionName: any_string, json: org.json.JSONObject): LootConditions;

            /**
             * Adds condition registered using [[LootModule.registerCustomLootCondition]] or [[LootModule.registerCustomLootConditionJS]].
             * 
             * You don't need to specify condition's name in `"condition"` param of JSON description, it's internally put there.
             * 
             * In fact, you can use this method not only with KEX-registered conditions, but also,
             * for example, with vanilla ones that are currently not supported by [[LootConditions]].
             * @param json condition's JSON description as a JS object
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            addCustomCondition(conditionName: any_string, json: {
                condition: any_string,
                [key: string]: any
            }): LootConditions;

            /**
             * Adds `"and"` condition, the condition that is met only if **all** of its sub-conditions are met
             * @param clauses list of sub-conditions, create it using [[LootModule.createConditionsList]]
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            addANDCondition(clauses: LootConditions): LootConditions;

            /**
             * Adds `"or"` condition, the condition that is met if **any** of its sub-conditions is met
             * @param clauses list of sub-conditions, create it using [[LootModule.createConditionsList]]
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            addORCondition(clauses: LootConditions): LootConditions;

            /**
             * Adds `"not"` condition, the condition that is met only if its sub-condition is **not** met
             * @param clause the sub-condition. Use [[LootModule.createConditionsList]] to create this object.
             * If you specify more than one condition to this list, the `"not(conditions[0])"` structure
             * will be automatically replaced with `"not(and(...conditions))"`
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            addNOTCondition(clause: LootConditions): LootConditions;

            /**
             * @returns [[LootPool]] that owns the following [[LootConditions]].
             * Use this in sequential call when you finish describing loot pool tiers.
             * @since 1.0
             */
            endConditions(): LootPool;

        }

        /**
         * Object representing additional properties of one of the pools of a loot table.
         * Returned by [[LootPool.beginTiers]].
         * @since 1.0
         */
        export interface LootTiers {

            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setBonusChance(bonusChance: number): LootTiers;

            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setBonusRolls(bonusRolls: number): LootTiers;

            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setInitialRange(initialRange: number): LootTiers;

            /**
             * @returns [[LootPool]] that owns the following [[LootTiers]].
             * Use this in sequential call when you finish describing loot pool tiers.
             * @since 1.0
             */
            endTiers(): LootPool;

        }

        /**
         * Object representing one of the entries (items) of the loot table pool.
         * Returned by [[LootPool.addEntry]].
         * @since 1.0
         */
        export interface LootEntry {

            /**
             * Specifies the item by given numeric ID.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            describeItem(numericId: number): LootEntry;

            /**
             * Specifies the item by given namespace and identifier.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            describeItem(namespace: any_string, identifier: any_string): LootEntry;

            /**
             * Specifies the item's count
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setCount(count: number): LootEntry;

            /**
             * Specifies the item's count, in this case it'll be
             * chosen randomly every time between given minimum and maximum value.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setCount(min: number, max: number): LootEntry;

            /**
             * Specifies the item's data.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setData(data: number): LootEntry;

            /**
             * Specifies the item's data, in this case it'll be
             * chosen randomly every time between given minimum and maximum value.
             * It can be used, for example, to put some tool or armor element with random durability.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setData(min: number, max: number): LootEntry;

            /**
             * Specifies the item's damage.
             * Technically the same as [[LootEntry.setData]],
             * but uses `"set_damage"` entry function instead of `"set_data"`.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setDamage(damage: number): LootEntry;

            /**
             * Specifies the item's damage, in this case it'll be
             * chosen randomly every time between given minimum and maximum value.
             * It can be used, for example, to put some tool or armor element with random durability.
             * Technically the same as [[LootEntry.setData]],
             * but uses `"set_damage"` entry function instead of `"set_data"`.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setDamage(min: number, max: number): LootEntry;

            /**
             * Specifies custom name that will be set to item
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setCustomName(name: any_string): LootEntry;

            /**
             * Specifies the weight value, that will be used in weighted random logics
             * when choosing the list of randomly chosen items from a loot table.
             * If there is more than one entry in a pool, the more the item's weight will be,
             * the more likely for this item to be chosen. If you have only one entry,
             * you can skip specifying this parameter. Actually you can skip it anyway,
             * as it defaults to 1.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setWeight(weight: number): LootEntry;

            /**
             * Sets the item's quality.
             * 
             * It's not known reliably where this value is used,
             * but talking about the vanilla loot tables, it's used in fishing tables.
             * 
             * Values are -2 for junk, -1 for fish and 2 for treasure.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            setQuality(quality: number): LootEntry;

            /**
             * @returns [[LootEntryFunctions]] object to add new functions to the following [[LootEntry]].
             * See [[LootEntryFunctions]] description for more details about these functions.
             * @since 1.0
             */
            beginFunctions(): LootEntryFunctions;

            /**
             * @returns [[LootPool]] that owns the following [[LootEntry]].
             * Use this in sequential call when you finish describing a loot pool entry.
             * @since 1.0
             */
            endEntry(): LootPool;

        }

        /**
         * Object representing the list of function that are applied to a specific item generated in loot table.
         * Returned by [[LootEntry.beginFunctions]].
         * 
         * These functions are described like JSON objects, there are 22 of them pre-defined in vanilla, however,
         * since Kernel Extension **3.0**, you can create your functions with a behavior without any limits, defined in JS or Java code,
         * using [[KEX.LootModule.registerCustomLootFunction]] or [[KEX.LootModule.registerCustomLootFunctionJS]].
         * @since 1.0
         */
        export interface LootEntryFunctions {

            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEnchantBookForTradingFunction(baseCost: number, baseRandomCost: number, perLevelCost: number, perLevelRandomCost: number): LootEntryFunctions;
            
            /**
             * Adds function that enchants the item with random enchantments
             * that are legal for the current item,
             * with given chance (between 0.0 and 1.0).
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEnchantRandomGearFunction(chance?: number): LootEntryFunctions;
            
            /**
             * Adds function that applies random enchantments to the item.
             * @param treasure if true, the item is enchanted only with enchantments
             * that are considered as treasures, like frost walking, mending, soul speed etc.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEnchantRandomlyFunction(treasure?: boolean): LootEntryFunctions;
            
            /**
             * Adds function that enchants the item using given amount of experience levels,
             * similar to how it works in enchantment table.
             * @param treasure if true, the item is enchanted only with enchantments
             * that are considered as treasures, like frost walking, mending, soul speed etc.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEnchantWithLevelsFunction(levels: number, treasure?: boolean): LootEntryFunctions;
            
            /**
             * Adds function that enchants the item using amount of experience levels,
             * chosen randomly between given minimum and maximum values,
             * similar to how it works in enchantment table.
             * @param treasure if true, the item is enchanted only with enchantments
             * that are considered as treasures, like frost walking, mending, soul speed etc.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addEnchantWithLevelsFunction(minLevels: number, maxLevels: number, treasure?: boolean): LootEntryFunctions;
            
            /**
             * Adds function that turns empty map item into exploration map pointing
             * to the nearest generated structure of given type.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addExplorationMapFunction(destination: FeatureTypes): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addFillContainerFunction(lootTable: any_string): LootEntryFunctions;
            
            /**
             * Adds function that turns the item into its furnace-smelted version, if it's defined.
             * @param conditions list of conditions that must pass to smelt the item.
             * Use [[LootModule.createConditionsList]] here.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addFurnaceSmeltFunction(conditions?: LootConditions): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addLootingEnchantFunction(): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addLootingEnchantFunction(minCount: number, maxCount: number): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomAuxValueFunction(): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomAuxValueFunction(minValue: number, maxValue: number): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addRandomDyeFunction(): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addActorIdFunction(actorId: any_string): LootEntryFunctions;
            
            /**
             * Adds function that applies given contents to the written book item.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addBookContentsFunction(author: any_string, title: any_string, pages: any_string[]): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addDataFromColorIndexFunction(): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addLoreFunction(lore: any_string[]): LootEntryFunctions;

            /**
             * Adds function that applies the specified enchantments to the item.
             * @param enchants specific enchantments to apply to the item,
             * represented as a JS object with keys - enchantment string names and values - their levels.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            addSpecificEnchantsFunction(enchants: { [key in EnchantTypes]: number }): LootEntryFunctions;
            
            /**
             * Adds function that applies the specified enchantments to the item.
             * @param enchants specific enchantments to apply to the item,
             * represented as a [[java.util.Map]] with keys - enchantment string names and values - their levels.
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addSpecificEnchantsFunction(enchants: java.util.Map<jstring, number>): LootEntryFunctions;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 1.0
             */
            addTraderMaterialTypeFunction(): LootEntryFunctions;
            
            /**
             * Adds function registered using [[LootModule.registerCustomLootFunction]] or [[LootModule.registerCustomLootFunctionJS]].
             * 
             * You don't need to specify function's name in `"function"` param of JSON description, it's internally put there.
             * 
             * In fact, you can use this method not only with KEX-registered functions, but also,
             * for example, with vanilla ones that are currently not supported by [[LootEntryFunctions]].
             * @param json function's JSON description as an [[org.json.JSONObject]]
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            addCustomFunction(functionName: any_string, json: org.json.JSONObject): LootEntryFunctions;

            /**
             * Adds function registered using [[LootModule.registerCustomLootFunction]] or [[LootModule.registerCustomLootFunctionJS]].
             * 
             * You don't need to specify function's name in `"function"` param of JSON description, it's internally put there.
             * 
             * In fact, you can use this method not only with KEX-registered functions, but also,
             * for example, with vanilla ones that are currently not supported by [[LootEntryFunctions]].
             * @param json function's JSON description as a JS object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            addCustomFunction(functionName: any_string, json: { [key: string]: any }): LootEntryFunctions;
            
            /**
             * @returns [[LootEntry]] that owns the following [[LootEntryFunctions]].
             * Use this in sequential call when you finish describing loot entry functions.
             * @since 1.0
             */
            endFunctions(): LootEntry;

        }

        /**
         * Internal namespace containing everything needed
         * for Minecraft loot tables JSON schema. The interface
         * for it is [[LootTableTypes.JsonFormat]].
         * @since 1.0
         */
        export namespace LootTableTypes {
            export interface JsonFormat {
                pools?: Pool[];
            }
            export interface Pool {
                type?: "item",
                rolls?: number | MinMax,
                tiers?: Conditions[],
                entries?: Entries[];
            }
            export interface Tiers {
                bonus_chance?: number,
                bonus_rolls?: number,
                initial_range?: number;
            }
            export type Conditions =
                ConditionEntityProperties |
                ConditionHasMarkVariant |
                ConditionRandomChance |
                ConditionRandomChanceWithLooting |
                ConditionRandomDifficultyChance |
                ConditionNoParams |
                ConditionAndOr |
                ConditionNot;
            export interface Condition<NAME> {
                condition: NAME;
            }
            export interface ConditionEntityProperties extends Condition<"entity_properties"> {
                entity?: "this",
                properties?: {
                    on_fire?: boolean,
                    on_ground?: boolean;
                };
            }
            export interface ConditionHasMarkVariant extends Condition<"has_mark_variant"> {
                value?: number;
            }
            export interface ConditionRandomChance extends Condition<"random_chance"> {
                chance?: number,
                max_chance?: number;
            }
            export interface ConditionRandomChanceWithLooting extends Condition<"random_chance_with_looting"> {
                chance?: number,
                looting_multiplier?: number;
            }
            export interface ConditionRandomDifficultyChance extends Condition<"random_difficulty_chance" | "random_regional_difficulty_chance"> {
                default_chance?: number,
                easy?: number,
                normal?: number,
                hard?: number,
                peaceful?: number;
            }
            export interface ConditionNoParams extends Condition<"killed_by_player" | "killed_by_player_or_pets"> {}
            export interface ConditionAndOr extends Condition<"and" | "or"> {
                clauses: Conditions[];
            }
            export interface ConditionNot extends Condition<"not"> {
                clause: Conditions;
            }
            export type Entries =
                EntryEmpty |
                EntryLootTable |
                EntryItem;
            export interface Entry<NAME> {
                type: NAME;
            }
            export interface EntryEmpty extends Entry<"empty"> {}
            export interface EntryLootTable extends Entry<"loot_table"> {
                pools?: Pool[];
            }
            export interface EntryItem extends Entry<"item"> {
                name?: any_string,
                count?: number,
                quality?: number,
                weight?: number,
                functions?: EntryFunctions[];
            }
            export type EntryFunctions =
                EntryFunctionEnchantBookForTrading |
                EntryFunctionEnchantRandomGear |
                EntryFunctionEnchantRandomly |
                EntryFunctionEnchantWithLevels |
                EntryFunctionExplorationMap |
                EntryFunctionFillContainer |
                EntryFunctionFurnaceSmelt |
                EntryFunctionLootingEnchant |
                EntryFunctionRandomAuxValue |
                EntryFunctionRandomBlockState |
                EntryFunctionSetActorId |
                EntryFunctionSetBookContents |
                EntryFunctionSetCount |
                EntryFunctionSetDamage |
                EntryFunctionSetData |
                EntryFunctionSetLore |
                EntryFunctionSetName |
                EntryFunctionSpecificEnchants |
                EntryFunctionNoParams;
            export interface EntryFunction<NAME> {
                function: NAME;
            }
            export interface EntryFunctionEnchantBookForTrading extends EntryFunction<"enchant_book_for_trading"> {
                base_cost: number,
                base_random_cost: number,
                per_level_cost: number,
                per_level_random_cost: number;
            }
            export interface EntryFunctionEnchantRandomGear extends EntryFunction<"enchant_random_gear"> {
                chance?: number;
            }
            export interface EntryFunctionEnchantRandomly extends EntryFunction<"enchant_randomly"> {
                treasure?: boolean;
            }
            export interface EntryFunctionEnchantWithLevels extends EntryFunction<"enchant_with_levels"> {
                levels?: number | MinMax,
                treasure?: boolean;
            }
            export interface EntryFunctionExplorationMap extends EntryFunction<"exploration_map"> {
                destination?: FeatureTypes;
            }
            export interface EntryFunctionFillContainer extends EntryFunction<"fill_container"> {
                loot_table?: any_string;
            }
            export interface EntryFunctionFurnaceSmelt extends EntryFunction<"furnace_smelt"> {
                conditions?: Conditions[];
            }
            export interface EntryFunctionLootingEnchant extends EntryFunction<"looting_enchant"> {
                count?: MinMax;
            }
            export interface EntryFunctionRandomAuxValue extends EntryFunction<"random_aux_value"> {
                values?: MinMax;
            }
            export interface EntryFunctionRandomBlockState extends EntryFunction<"random_block_state"> {
                block_state?: any_string,
                values?: MinMax;
            }
            export interface EntryFunctionSetActorId extends EntryFunction<"set_actor_id"> {
                id?: any_string;
            }
            export interface EntryFunctionSetBookContents extends EntryFunction<"set_book_contents"> {
                author: any_string,
                title: any_string,
                pages: any_string[];
            }
            export interface EntryFunctionSetCount extends EntryFunction<"set_count"> {
                count?: number | MinMax;
            }
            export interface EntryFunctionSetDamage extends EntryFunction<"set_damage"> {
                damage?: number | MinMax;
            }
            export interface EntryFunctionSetData extends EntryFunction<"set_data"> {
                data?: number | MinMax;
            }
            export interface EntryFunctionSetLore extends EntryFunction<"set_lore"> {
                lore?: any_string[];
            }
            export interface EntryFunctionSetName extends EntryFunction<"set_name"> {
                name?: any_string;
            }
            export interface EntryFunctionSpecificEnchants extends EntryFunction<"specific_enchants"> {
                enchants?: {
                    id?: EnchantTypes,
                    level?: number;
                }[];
            }
            export interface EntryFunctionNoParams extends EntryFunction<"random_dye" | "set_data_from_color_index" | "trader_material_type"> {}
        }

    }

}
declare module KEX {

    /**
     * Object containing data about the circumstances of a loot event.
     * Used in all methods connected with generating a list of randomly chosen items from a loot table.
     * @since 2.0
     */
    export interface LootTableContext extends INativeInterface {

        /**
         * @returns following loot event's `ThisEntity`, most commonly it's a victim entity,
         * from which the chosen items are dropped. If loot event was not associated
         * with an entity death, null is returned.
         * @since 2.0
         */
        getThisEntity(): Nullable<Actor>;

        /**
         * @since 2.0
         */
        getOriginalItemName(): Nullable<jstring>;

        /**
         * @since 2.0
         */
        setOriginalItemName(name: any_string): void;

        /**
         * @since 2.0
         */
        getLevel(): Nullable<Level>;

        /**
         * @returns following loot event's explosion radius. It's the range
         * the chosen items will be dropped in, if it's a loot event from entity death.
         * @since 2.0
         */
        getExplosionRadius(): number;

        /**
         * @returns amount of luck applied to the following loot event.
         * @since 2.0
         */
        getLuck(): number;

        /**
         * @returns [[Player]] object of the player who had killed the victim entity, or null if
         * the following loot event was not triggered by entity death or
         * the victim was not killed by a player.
         * @since 2.0
         */
        getKillerPlayer(): Nullable<Player>;

        /**
         * @returns [[Actor]] object of the player's pet who had killed the victim entity, or null if
         * the following loot event was not triggered by entity death or
         * the victim was not killed by some player's pet.
         * @since 2.0
         */
        getKillerPet(): Nullable<Actor>;

        /**
         * @returns [[Actor]] object of the entity who had killed the victim entity, or null if
         * the following loot event was not triggered by entity death or
         * the victim was not killed by an entity.
         * @since 2.0
         */
        getKillerEntity(): Nullable<Actor>;
        
    }

    export module LootTableContext {

        /**
         * Object used to create new [[LootTableContext]] from scratch where it's needed.
         * 
         * Designed for sequential calls starting with its constructor and ending with its `create()` method.
         * @since 2.0
         */
        export class Builder extends java.lang.Object implements INativeInterface {

            /**
             * @returns pointer to the native object wrapped by the following [[LootTableContext.Builder]] object,
             * represented by a signed 64-bit integer
             */
            getPointer(): number;
            
            /**
             * Constructs new [[LootTableContext.Builder]] object from given [[Level]] object.
             * This [[Level]] can be obtained in different ways, for example,
             * [[Actor.getLevel]] or [[GlobalContext.getLevel]].
             * @since 2.0
             */
            constructor(level: Level);
            
            /**
             * Specifies loot event's explosion radius.
             * @returns reference to itself to be used in sequential calls
             * @since 2.0
             */
            withExplosionRadius(radius: number): Builder;
            
            /**
             * Specifies loot event's `ThisEntity`. Most commonly it's
             * a dead entity, from which the items are dropped.
             * @returns reference to itself to be used in sequential calls
             * @since 2.0
             */
            withThisEntity(entity: Actor): Builder;
            
            /**
             * Specifies loot event's luck value.
             * @returns reference to itself to be used in sequential calls
             * @since 2.0
             */
            withLuck(luck: number): Builder;
            
            /**
             * @returns reference to itself to be used in sequential calls
             * @since 2.0
             */
            withOriginalItemName(name: any_string): Builder;
            
            /**
             * Specifies the player entity who killed the victim entity (`ThisEntity`).
             * @returns reference to itself to be used in sequential calls
             * @since 2.0
             */
            withKillerPlayer(player: Player): Builder;
            
            /**
             * @returns [[LootTableContext]] object created from the following [[Builder]]
             * after all `with` calls.
             * - Note: the result object is linked to a native object,
             * and the native one will be deleted from memory once this object's `finalize` method will be called.
             * @since 2.0
             */
            create(): LootTableContext;

        }

    }

}
declare module KEX {

    /**
     * Module containing different vector classes for various operations
     * @since 5.0
     */
    export module Math {

        /**
         * Vector of two floating point numbers
         * @since 5.0
         */
        export class Vec2f extends java.lang.Object {

            /**
             * ```java
             * new Vec2f(0.0f, 0.0f);
             * ```
             * @since 5.0
             */
            static readonly ZERO: Vec2f;

            /**
             * ```java
             * new Vec2f(1.0f, 1.0f);
             * ```
             * @since 5.0
             */
            static readonly ONE: Vec2f;

            /**
             * ```java
             * new Vec2f(1.0f, 0.0f);
             * ```
             * @since 5.0
             */
            static readonly UNIT_X: Vec2f;

            /**
             * ```java
             * new Vec2f(-1.0f, 0.0f);
             * ```
             * @since 5.0
             */
            static readonly NEGATIVE_UNIT_X: Vec2f;

            /**
             * ```java
             * new Vec2f(0.0f, 1.0f);
             * ```
             * @since 5.0
             */
            static readonly UNIT_Y: Vec2f;

            /**
             * ```java
             * new Vec2f(0.0f, -1.0f);
             * ```
             * @since 5.0
             */
            static readonly NEGATIVE_UNIT_Y: Vec2f;

            /**
             * ```java
             * new Vec2f(Float.MAX_VALUE, Float.MAX_VALUE);
             * ```
             * @since 5.0
             */
            static readonly MAX: Vec2f;

            /**
             * ```java
             * new Vec2f(Float.MIN_VALUE, Float.MIN_VALUE);
             * ```
             * @since 5.0
             */
            static readonly MIN: Vec2f;

            readonly x: number;
            readonly y: number;

            /**
             * Constructs a new [[Vec2f]] instance from two given coordinates
             * @since 5.0
             */
            constructor(x: number, y: number);

        }

        /**
         * Vector of three floating point numbers
         * @since 5.0
         */
        export class Vec3d extends java.lang.Object {

            /**
             * ```java
             * new Vec3d(0.0d, 0.0d, 0.0d);
             * ```
             * @since 5.0
             */
            static readonly ZERO: Vec3d;

            readonly x: number;
            readonly y: number;
            readonly z: number;

            /**
             * Constructs a new [[Vec3d]] instance from three given coordinates
             * @since 5.0
             */
            constructor(x: number, y: number, z: number);

            /**
             * Constructs a copy of given [[Vec3d]]
             * @since 5.0
             */
            constructor(vector: Vec3d);

            /**
             * @returns [[Vec3d]] which is a difference of `vec` and following [[Vec3d]]
             * @since 5.0
             */
            subtractReverse(vec: Vec3d): Vec3d;

            /**
             * @since 5.0
             */
            normalize(): Vec3d;

            /**
             * @returns sum of products of corresponding coordinates of the following vector and the given vector
             * @since 5.0
             */
            dotProduct(vec: Vec3d): number;

            /**
             * @since 5.0
             */
            crossProduct(vec: Vec3d): Vec3d;

            /**
             * @returns new vector, which as coordinates has differences of the corresponding coordinates of the following vector and the given vector
             * @since 5.0
             */
            subtract(vec: Vec3d): Vec3d;

            /**
             * Same as `subtract(vec: Vec3d)`, but with three coordinates instead of another vector
             * @since 5.0
             */
            subtract(x: number, y: number, z: number): Vec3d;

            /**
             * @returns new vector, which as coordinates has sums of the corresponding coordinates of the following vector and the given vector
             * @since 5.0
             */
            add(vec: Vec3d): Vec3d;

            /**
             * Same as `add(vec: Vec3d)`, but with three coordinates instead of another vector
             * @since 5.0
             */
            addVector(x: number, y: number, z: number): Vec3d;

            /**
             * @since 5.0
             */
            distanceTo(vec: Vec3d): number;

            /**
             * @since 5.0
             */
            squareDistanceTo(vec: Vec3d): number;

            /**
             * @since 5.0
             */
            squareDistanceTo(x: number, y: number, z: number): number;

            /**
             * @returns new vector with coordinates of the following vector multiplied by given factor 
             * @since 5.0
             */
            scale(factor: number): Vec3d;

            /**
             * @since 5.0
             */
            lengthVector(): number;

            /**
             * @since 5.0
             */
            lengthSquared(): number;

            /**
             * @since 5.0
             */
            getIntermediateWithXValue(vec: Vec3d, x: number): Nullable<Vec3d>;
            
            /**
             * @since 5.0
             */
            getIntermediateWithYValue(vec: Vec3d, x: number): Nullable<Vec3d>;
            
            /**
             * @since 5.0
             */
            getIntermediateWithZValue(vec: Vec3d, x: number): Nullable<Vec3d>;

            /**
             * @since 5.0
             */
            rotatePitch(pitch: number): Vec3d;

            /**
             * @since 5.0
             */
            rotateYaw(yaw: number): Vec3d;

            /**
             * @since 5.0
             */
            static fromPitchYawVector(pitchYawVec: Vec2f): Vec3d;

            /**
             * @since 5.0
             */
            static fromPitchYaw(pitch: number, yaw: number): Vec3d;

        }

        /**
         * Vector of three integer numbers
         * @since 5.0
         */
        export class Vec3i extends java.lang.Object implements java.lang.Comparable<Vec3i> {

            /**
             * ```java
             * new Vec3i(0, 0, 0);
             * ```
             * @since 5.0
             */
            static readonly NULL_VECTOR: Vec3i;

            readonly x: number;
            readonly y: number;
            readonly z: number;

            /**
             * Constructs a new [[Vec3i]] instance of given three **integer** coordinates
             * @since 5.0
             */
            constructor(x: number, y: number, z: number);

            /**
             * Implementation of [[java.lang.Comparable]]'s `compareTo` method
             * @since 5.0
             */
            compareTo(otherVec: Vec3i): number;

            /**
             * @returns X coordinate of the following vector
             * @since 5.0
             */
            getX(): number;

            /**
             * @returns Y coordinate of the following vector
             * @since 5.0
             */
            getY(): number;

            /**
             * @returns Z coordinate of the following vector
             * @since 5.0
             */
            getZ(): number;

            /**
             * @since 5.0
             */
            crossProduct(vec: Vec3i): Vec3i;

            /**
             * @since 5.0
             */
            getDistance(x: number, y: number, z: number): number;

            /**
             * @since 5.0
             */
            distanceSq(x: number, y: number, z: number): number;

            /**
             * @since 5.0
             */
            distanceSqToCenter(x: number, y: number, z: number): number;

            /**
             * @since 5.0
             */
            distanceSq(to: Vec3i): number;

        }

        /**
         * Class containing different useful operations to apply to coordinates set with a side
         * @since 5.0
         */
        export class Direction extends java.lang.Object {

            /**
             * ```java
             * new Direction(0, 1, -1, "down", AxisDirection.NEGATIVE, Axis.Y, new Vec3i(0, -1, 0));
             * ```
             * @since 5.0
             */
            static readonly DOWN: Direction;

            /**
             * ```java
             * new Direction(1, 0, -1, "up", AxisDirection.POSITIVE, Axis.Y, new Vec3i(0, 1, 0));
             * ```
             * @since 5.0
             */
            static readonly UP: Direction;

            /**
             * ```java
             * new Direction(2, 3, 2, "north", AxisDirection.NEGATIVE, Axis.Z, new Vec3i(0, 0, -1));
             * ```
             * @since 5.0
             */
            static readonly NORTH: Direction;
            
            /**
             * ```java
             * new Direction(3, 2, 0, "south", AxisDirection.POSITIVE, Axis.Z, new Vec3i(0, 0, 1));
             * ```
             * @since 5.0
             */
            static readonly SOUTH: Direction;

            /**
             * ```java
             * new Direction(4, 5, 1, "west", AxisDirection.NEGATIVE, Axis.X, new Vec3i(-1, 0, 0));
             * ```
             * @since 5.0
             */
            static readonly WEST: Direction;

            /**
             * ```java
             * new Direction(5, 4, 3, "east", AxisDirection.POSITIVE, Axis.X, new Vec3i(1, 0, 0));
             * ```
             * @since 5.0
             */
            static readonly EAST: Direction;

            /**
             * Since [[Direction]] is originally a Java enum, new instances cannot be constructed
             * @since 5.0
             */
            private constructor(index: number, opposite: number, horizontalIndex: number, name: any_string, axisDirection: Direction.AxisDirection, axis: Direction.Axis, directionVec: Vec3i);

            /**
             * @returns following [[Direction]]'s index from 0 to 5, which matches with
             * the values of the `side` field in [[Callback.ItemUseCoordinates]]
             * @since 5.0
             */
            getIndex(): number;

            /**
             * @since 5.0
             */
            getAxisDirection(): Direction.AxisDirection;

            /**
             * @returns [[Direction]] opposite to the following one
             * (north <=> south, east <=> west, up <=> down)
             * @since 5.0
             */
            getOpposite(): Direction;

            /**
             * @returns [[Direction]] obtained after rotating the following
             * [[Direction]] clockwise around the given axis.
             * Throws [[java.lang.IllegalStateException]] if axis is invalid.
             * @since 5.0
             */
            rotateAround(axis: Direction.Axis): Direction;

            /**
             * @returns [[Direction]] obtained after rotating the following
             * [[Direction]] clockwise around the Y axis.
             * Throws [[java.lang.IllegalStateException]] for `UP` and `DOWN` or invalid [[Direction]]s.
             * @since 5.0
             */
            rotateY(): Direction;

            /**
             * @returns [[Direction]] obtained after rotating the following
             * [[Direction]] clockwise around the X axis.
             * Throws [[java.lang.IllegalStateException]] for `EAST` and `WEST` or invalid [[Direction]]s.
             * @since 5.0
             */
            rotateX(): Direction;

            /**
             * @returns [[Direction]] obtained after rotating the following
             * [[Direction]] clockwise around the Z axis.
             * Throws [[java.lang.IllegalStateException]] for `NORTH` and `SOUTH` or invalid [[Direction]]s.
             * @since 5.0
             */
            rotateZ(): Direction;

            /**
             * @returns [[Direction]] obtained after rotating the following
             * [[Direction]] counterclockwise around the Y axis.
             * Throws [[java.lang.IllegalStateException]] for `UP` and `DOWN` or invalid [[Direction]]s.
             * @since 5.0
             */
            rotateYCCW(): Direction;

            /**
             * @returns value added to the X coordinate of a vector,
             * if the offset with the following [[Direction]] is applied to it. Can be 0 or 1.
             * @since 5.0
             */
            getFrontOffsetX(): number;

            /**
             * @returns value added to the Y coordinate of a vector,
             * if the offset with the following [[Direction]] is applied to it. Can be 0 or 1.
             * @since 5.0
             */
            getFrontOffsetY(): number;

            /**
             * @returns value added to the Z coordinate of a vector,
             * if the offset with the following [[Direction]] is applied to it. Can be 0 or 1.
             * @since 5.0
             */
            getFrontOffsetZ(): number;

            /**
             * @since 5.0
             */
            getAxis(): Direction.Axis;

            /**
             * @returns [[Direction]] instance by given name or null if
             * a [[Direction]] with given name does not exist
             * @since 5.0
             */
            static byName(name: any_string): Nullable<Direction>;

            /**
             * @since 5.0
             */
            static getFront(index: number): Direction;

            /**
             * @since 5.0
             */
            static getHorizontal(index: number): Direction;

            /**
             * @returns one of four horizontal [[Direction]]s
             * best matching to the given angle in **degrees**
             * @since 5.0
             */
            static fromAngle(angle: number): Direction;

            /**
             * @since 5.0
             */
            getHorizontalAngle(): number;

            /**
             * @returns one of six [[Direction]]s randomly chosen
             * using given [[java.util.Random]] object
             * @since 5.0
             */
            static random(rand: java.util.Random): Direction;

            /**
             * @since 5.0
             */
            static getFacingFromVector(x: number, y: number, z: number): Direction;

            /**
             * @returns [[Direction]] with matching axis and axis direction.
             * Throws [[java.lang.IllegalArgumentException]] if given axis and axis direction
             * don't have a corresponding [[Direction]] instance.
             * @since 5.0
             */
            static getFacingFromAxis(axisDir: Direction.AxisDirection, axis: Direction.Axis): Direction;

            /**
             * @since 5.0
             */
            getDirectionVec(): Vec3i;

            /**
             * Same as [[rotateAround]], but just returns the following [[Direction]] unchanged
             * instead of throwing a [[java.lang.IllegalStateException]] for the [[Direction]]s
             * incompatible for rotation around the given axis.
             * However, throws [[java.lang.IncompatibleClassChangeError]] if the given axis is invalid.
             * @since 5.0
             */
            getClockWise(axis: Direction.Axis): Direction;

            /**
             * Same as [[getClockWise]], but counterclockwise (unexpected?)
             * @since 5.0
             */
            getCounterClockWise(axis: Direction.Axis): Direction;

            /**
             * Same as [[rotateY]]
             * @since 5.0
             */
            getClockWise(): Direction;

            /**
             * Counterclockwise variant of [[getClockWise]] / [[rotateY]]
             * @since 5.0
             */
            getCounterClockWise(): Direction;

            /**
             * Same as [[rotateX]]
             * @since 5.0
             */
            getClockWiseX(): Direction;

            /**
             * Counterclockwise variant of [[getClockWiseX]] / [[rotateX]]
             * @since 5.0
             */
            getCounterClockWiseX(): Direction;

            /**
             * Same as [[rotateZ]]
             * @since 5.0
             */
            getClockWiseZ(): Direction;

            /**
             * Counterclockwise variant of [[getClockWiseZ]] / [[rotateZ]]
             * @since 5.0
             */
            getCounterClockWiseZ(): Direction;

        }

        /**
         * Helping classes of the [[Direction]] class
         * @since 5.0
         */
        export module Direction {

            /**
             * Class representing the axis, which the
             * [[Direction]]'s plane is perpendicular to.
             * @since 5.0
             */
            export class Axis extends java.lang.Object {

                /**
                 * ```java
                 * new Axis("x", Plane.HORIZONTAL);
                 * ```
                 * @since 5.0
                 */
                static readonly X: Axis;

                /**
                 * ```java
                 * new Axis("y", Plane.VERTICAL);
                 * ```
                 * @since 5.0
                 */
                static readonly Y: Axis;

                /**
                 * ```java
                 * new Axis("z", Plane.HORIZONTAL);
                 * ```
                 * @since 5.0
                 */
                static readonly Z: Axis;

                /**
                 * Since [[Axis]] is originally a Java enum, new instances cannot be constructed
                 * @since 5.0
                 */
                private constructor(name: any_string, plane: Plane);

                /**
                 * @returns [[Axis]] instance by given name or null if
                 * a [[Axis]] with given name does not exist
                 * @since 5.0
                 */
                static byName(name: any_string): Nullable<Axis>;

                /**
                 * @since 5.0
                 */
                isVertical(): boolean;

                /**
                 * @since 5.0
                 */
                isHorizontal(): boolean;

                /**
                 * @returns true if the following [[Axis]] matches with the
                 * given [[Direction]]'s [[Axis]], false otherwise or if given [[Direction]] is null
                 * @since 5.0
                 */
                apply(to: Nullable<Direction>): boolean;

                /**
                 * @since 5.0
                 */
                getPlane(): Plane;

            }

            /**
             * Class representing the direction of the [[Direction]]'s axis.
             * Basically whether the coordinate offset of a [[Direction]] is positive or negative.
             * @since 5.0
             */
            export class AxisDirection extends java.lang.Object {

                /**
                 * ```java
                 * new AxisDirection(1, "Towards positive");
                 * ```
                 * @since 5.0
                 */
                static readonly POSITIVE: AxisDirection;

                /**
                 * ```java
                 * new AxisDirection(-1, "Towards negative");
                 * ```
                 * @since 5.0
                 */
                static readonly NEGATIVE: AxisDirection;

                /**
                 * Since [[AxisDirection]] is originally a Java enum, new instances cannot be constructed
                 * @since 5.0
                 */
                private constructor(offset: number, description: any_string);

                /**
                 * @returns coordinate offset for the following [[AxisDirection]],
                 * 1 for `POSITIVE` and -1 for `NEGATIVE`
                 * @since 5.0
                 */
                getOffset(): number;

            }

            /**
             * Class representing the plane on which a certain [[Direction]] lays
             * @since 5.0
             */
            export class Plane extends java.lang.Object {

                /**@since 5.0 */
                static readonly HORIZONTAL: Plane;
                /**@since 5.0 */
                static readonly VERTICAL: Plane;

                /**
                 * Since [[Plane]] is originally a Java enum, new instances cannot be constructed
                 * @since 5.0
                 */
                private constructor();

                /**
                 * @returns array of [[Direction]]s laying on the following [[Plane]]
                 * @since 5.0
                 */
                facings(): Direction[];

                /**
                 * @returns one of [[Direction]]s laying on the following [[Plane]],
                 * randomly chosen using given [[java.util.Random]] object
                 * @since 5.0
                 */
                random(rand: java.util.Random): Direction;

                /**
                 * @returns true if the given [[Direction]] lays on the following [[Plane]],
                 * false otherwise or if the given [[Direction]] is null
                 * @since 5.0
                 */
                apply(dir: Nullable<Direction>): boolean;

                /**
                 * @returns iterator for the list of [[Direction]]s laying on the following [[Plane]]
                 * @since 5.0
                 */
                iterator(): java.util.Iterator<Direction>;

            }

        }

        /**
         * Extension of [[Vec3i]] more frequently used when
         * a vector represents the position of a certain block in the world
         * @since 5.0
         */
        export class BlockPos extends Vec3i {

            /**
             * ```java
             * new BlockPos(0, 0, 0);
             * ```
             * @since 5.0
             */
            static readonly ORIGIN: BlockPos;

            /**
             * Constructs a new [[BlockPos]] instance from three given coordinates
             * @since 5.0
             */
            constructor(x: number, y: number, z: number);

            /**
             * Constructs a new [[BlockPos]] instance from floored coordinates of the given [[Vec3d]]
             * @since 5.0
             */
            constructor(vec: Vec3d);
            
            /**
             * Constructs a new [[BlockPos]] instance from coordinates of the given [[Vec3i]]
             * @since 5.0
             */
            constructor(vec: Vec3i);

            /**
             * @returns new [[BlockPos]] instance from the following one with given offsets
             * @since 5.0
             */
            add(x: number, y: number, z: number): BlockPos;

            /**
             * @returns new [[BlockPos]] instance from the following one with given offsets as a vector
             * @since 5.0
             */
            add(vec: Vec3i): BlockPos;

            /**
             * @returns new [[BlockPos]] instance, which as coordinates has differences
             * of corresponding coordinates of the following [[BlockPos]] and given [[Vec3i]]
             * @since 5.0
             */
            subtract(vec: Vec3i): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            up(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            down(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            north(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            south(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            west(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @since 5.0
             */
            east(n?: number): BlockPos;

            /**
             * @param n offset, defaults to 1
             * @returns new [[BlockPos]] with given offset to given [[Direction]]
             * @since 5.0
             */
            offset(facing: Direction, n?: number): BlockPos;

            /**
             * @since 5.0
             */
            crossProduct(vec: Vec3i): BlockPos;

            /**
             * @returns coordinates of the following [[BlockPos]]
             * packed into a signed 64-bit integer
             * @since 5.0
             */
            toLong(): number;

            /**
             * @returns [[BlockPos]] from given 64-bit integer representation
             * @since 5.0
             */
            static fromLong(serialized: number): BlockPos;

        }

        /**
         * Class primarily used to apply rotation to block states
         * @since 5.0
         */
        export class Rotation extends java.lang.Object {

            /**@since 5.0 */
            static readonly NONE: Rotation;
            /**@since 5.0 */
            static readonly CLOCKWISE_90: Rotation;
            /**@since 5.0 */
            static readonly CLOCKWISE_180: Rotation;
            /**@since 5.0 */
            static readonly COUNTERCLOCKWISE_90: Rotation;

            /**
             * Since [[Rotation]] is originally a Java enum, new instances cannot be constructed
             * @since 5.0
             */
            private constructor();

            /**
             * @returns the following [[Rotation]] with another one applied
             * @since 5.0
             */
            getRotated(rot: Rotation): Rotation;

            /**
             * @returns given [[Direction]] rotated the way the following [[Rotation]] defines
             * @since 5.0
             */
            rotate(dir: Direction): Direction;

            /**
             * @returns one of [[Rotation]]s randomly chosen
             * using given [[java.util.Random]] object
             * @since 5.0
             */
            getRandom(rand: java.util.Random): Rotation;

            /**
             * @returns list of all [[Rotation]]s shuffled randomly
             * using given [[java.util.Random]] object
             * @since 5.0
             */
            getShuffled(rand: java.util.Random): java.util.List<Rotation>;

        }

        /**
         * Class primarily used to apply mirroring to block states
         * @since 5.0
         */
        export class Mirror extends java.lang.Object {

            /**@since 5.0 */
            static readonly NONE: Mirror;
            /**@since 5.0 */
            static readonly LEFT_RIGHT: Mirror;
            /**@since 5.0 */
            static readonly FRONT_BACK: Mirror;

            /**
             * Since [[Mirror]] is originally a Java enum, new instances cannot be constructed
             * @since 5.0
             */
            private constructor();

            /**
             * @since 5.0
             */
            getRotation(dir: Direction): Rotation;

            /**
             * @returns given [[Direction]] mirrored the way the following [[Mirror]] defines
             * @since 5.0
             */
            mirror(dir: Direction): Direction;

        }

    }

}
declare module KEX {

    /**
     * Wrapper for the native `Mob` class extending [[Actor]]
     * and giving access to more methods of entities of this class.
     * 
     * You can construct new [[Mob]] from an existing [[Actor]],
     * or call [[Actor.asMob]].
     * 
     * First will throw [[java.lang.IllegalArgumentException]],
     * second will return null, if given [[Actor]] is not a [[Mob]].
     * @since 1.0
     */
    export class Mob extends Actor {
        
        /**
         * Constructs new [[Mob]] object from given entity unique ID.
         * Use [[Actor.isValid]] and [[Actor.isMob]] first, to check if entity with
         * this ID exists and it's a [[Mob]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 1.0
         */
        constructor(entity: number);
        
        /**
         * Constructs new [[Mob]] object from an existing [[Actor]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Actor]] is not a [[Mob]].
         * You should better use [[Actor.asMob]], that will return null in case your [[Actor]] is not a [[Mob]].
         * @since 1.0
         */
        constructor(actor: Actor);
        
        /**
         * @since 1.0
         */
        setSleeping(sleeping: boolean): void;

        /**
         * @since 4.0
         */
        isSprinting(): boolean;
        
        /**
         * @since 1.0
         */
        setSprinting(sprinting: boolean): void;
        
        /**
         * @since 1.0
         */
        getSpeed(): number;
        
        /**
         * @since 1.0
         */
        setSpeed(speed: number): void;
        
        /**
         * @since 1.0
         */
        getJumpPower(): number;
        
        /**
         * @since 1.0
         */
        getMeleeWeaponDamageBonus(mob: Mob): number;
        
        /**
         * @since 1.0
         */
        getMeleeKnockbackBonus(): number;
        
        /**
         * @since 1.0
         */
        travel(strafe: number, vertical: number, forward: number): void;
        
        /**
         * @since 1.0
         */
        applyFinalFriction(friction: number, discardFriction: boolean): void;
        
        /**
         * @since 1.0
         */
        isLookingAtAnEntity(): boolean;
        
        /**
         * @since 1.0
         */
        getItemUseDuration(): number;
        
        /**
         * @since 1.0
         */
        getItemUseStartupProgress(): number;
        
        /**
         * @since 1.0
         */
        getItemUseIntervalProgress(): number;
        
        /**
         * @since 1.0
         */
        getMaxHeadXRot(): number;
        
        /**
         * @since 1.0
         */
        getLastHurtByMob(): Nullable<Mob>;
        
        /**
         * @since 1.0
         */
        setLastHurtByMob(mob: Mob): void;
        
        /**
         * @since 1.0
         */
        getLastHurtMob(): Nullable<Actor>;
        
        /**
         * @since 1.0
         */
        setLastHurtMob(actor: Actor): void;
        
        /**
         * @since 1.0
         */
        isAlliedTo(mob: Mob): boolean;
        
        /**
         * @since 1.0
         */
        canBeControlledByRider(): boolean;
        
        /**
         * @since 1.0
         */
        leaveCaravan(): void;
        
        /**
         * @since 1.0
         */
        joinCaravan(caravanHead: Mob): void;
        
        /**
         * @since 1.0
         */
        hasCaravanTail(): boolean;
        
        /**
         * @since 1.0
         */
        getCaravanHead(): Nullable<Mob>;
        
        /**
         * @since 1.0
         */
        getArmorValue(): number;
        
        /**
         * @since 1.0
         */
        getArmorCoverPercentage(): number;
        
        /**
         * @since 1.0
         */
        getItemSlot(slot: number): Nullable<ItemInstance>;
        
        /**
         * @since 3.0
         */
        setItemSlot(slot: number, id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 1.0
         */
        isTransitioningSitting(): boolean;
        
        /**
         * @since 1.0
         */
        setTransitioningSitting(transitioningSitting: boolean): void;
        
        /**
         * @since 1.0
         */
        canExistWhenDisallowMob(): boolean;
        
        /**
         * @since 1.0
         */
        jumpFromGround(): void;
        
        /**
         * @since 1.0
         */
        getNoActionTime(): number;
        
        /**
         * @since 1.0
         */
        resetNoActionTime(): void;
        
        /**
         * @since 1.0
         */
        wantsToBeJockey(): boolean;
        
        /**
         * @since 1.0
         */
        setWantsToBeJockey(wantsToBeJockey: boolean): void;
        
        /**
         * @since 1.0
         */
        isLayingEgg(): boolean;
        
        /**
         * @since 1.0
         */
        setIsLayingEgg(laying: boolean): void;
        
        /**
         * @since 1.0
         */
        getGlidingTicks(): number;
        
        /**
         * @since 1.0
         */
        getFrictionModifier(): number;
        
        /**
         * @since 1.0
         */
        setFrictionModifier(frictionModifier: number): void;
        
        /**
         * @since 1.0
         */
        snapToYBodyRot(rot: number): void;
        
        /**
         * @since 1.0
         */
        snapToYHeadRot(rot: number): void;
        
        /**
         * @since 1.0
         */
        incrementArrowCount(increment: number): void;
        
        /**
         * @since 3.0
         */
        canPickUpLoot(id: number, count: number, data: number, extra?: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): boolean;
        
        /**
         * @since 1.0
         */
        getJumpMultiplier(): number;
        
        /**
         * @since 1.0
         */
        hasBeenHurtByMobInLastTicks(ticks: number): boolean;
        
        /**
         * @since 1.0
         */
        isHeadInWater(): boolean;
        
        /**
         * @since 1.0
         */
        getMovementComponentCurrentSpeed(): number;
        
        /**
         * @since 1.0
         */
        setMovementComponentCurrentSpeed(speed: number): void;
        
        /**
         * @since 1.0
         */
        getFlightSpeed(): number;
        
        /**
         * @since 1.0
         */
        setFlightSpeed(speed: number): void;
        
        /**
         * @since 1.0
         */
        isInterpolationActive(): boolean;
        
        /**
         * @since 1.0
         */
        setInterpolationActive(interpolationActive: boolean): void;
        
        /**
         * @since 1.0
         */
        setYHeadRot(rot: number): void;
        
        /**
         * @since 1.0
         */
        getRiderRotLimit(): number;
        
        /**
         * @since 1.0
         */
        setRiderRotLimit(lim: number): void;
        
        /**
         * @since 1.0
         */
        getRollCounter(): number;
        
        /**
         * @since 1.0
         */
        isRolling(): boolean;
        
        /**
         * @since 1.0
         */
        setRolling(rolling: boolean): void;
        
        /**
         * @since 1.0
         */
        getSpawnMethod(): number;
        
        /**
         * @since 1.0
         */
        setSpawnMethod(method: number): void;
        
        /**
         * @since 1.0
         */
        getXxa(): number;
        
        /**
         * @since 1.0
         */
        setXxa(xxa: number): void;
        
        /**
         * @since 1.0
         */
        getYya(): number;
        
        /**
         * @since 1.0
         */
        setYya(yya: number): void;
        
        /**
         * @since 1.0
         */
        getZza(): number;
        
        /**
         * @since 1.0
         */
        setZza(yya: number): void;
        
        /**
         * @since 1.0
         */
        getTravelType(): number;
        
        /**
         * @since 1.0
         */
        setSurfaceMob(isSurfaceMob: boolean): void;
        
        /**
         * @since 1.0
         */
        isPregnant(): boolean;
        
        /**
         * @since 1.0
         */
        setIsPregnant(pregnant: boolean): void;
        
        /**
         * @since 1.0
         */
        isNaturallySpawned(): boolean;
        
        /**
         * @since 1.0
         */
        setNaturallySpawned(naturallySpawned: boolean): void;
        
        /**
         * @since 1.0
         */
        getRiderLockedBodyRot(): number;
        
        /**
         * @since 1.0
         */
        setRiderLockedBodyRot(rot: number): void;
        
        /**
         * @since 1.0
         */
        isFrostWalking(): boolean;
        
        /**
         * @since 1.0
         */
        setJumpVelRedux(redux: number): void;
        
        /**
         * @since 1.0
         */
        calcMoveRelativeSpeed(travelType: number): number;
        
        /**
         * @since 1.0
         */
        isEating(): boolean;
        
        /**
         * @since 1.0
         */
        setEating(eating: boolean): void;
        
        /**
         * @since 1.0
         */
        getEatCounter(): number;
        
        /**
         * @since 1.0
         */
        setEatCounter(counter: number): void;
        
        /**
         * @since 1.0
         */
        hasBoundOrigin(): boolean;
        
        /**
         * @since 1.0
         */
        getCaravanSize(): number;
        
        /**
         * @since 1.0
         */
        shouldApplyWaterGravity(): boolean;
        
        /**
         * @since 1.0
         */
        isGliding(): boolean;
        
        /**
         * @since 1.0
         */
        getFirstCaravanHead(): Nullable<Mob>;
        
        /**
         * @since 1.0
         */
        getYRotA(): number;
        
        /**
         * @since 1.0
         */
        setYRotA(yrota: number): void;
        
        /**
         * @since 1.0
         */
        setJumping(jumping: boolean): void;
        
        /**
         * @since 1.0
         */
        setSpeedModifier(speedModifier: number): void;
        
        /**
         * @since 1.0
         */
        getCurrentSwingDuration(): number;
        
        /**
         * @since 1.0
         */
        isSwinging(): boolean;
        
        /**
         * @since 1.0
         */
        calculateJumpImpulse(): number;
        
        /**
         * @since 1.0
         */
        isSlime(): boolean;
        
        /**
         * @since 1.0
         */
        asSlime(): Nullable<Slime>;

    }

}
declare module KEX {

    /**
     * Wrapper for the native `MobEffect` class to access
     * some additional properties of a specific potion effect.
     * @since 1.0
     */
    export class MobEffect extends java.lang.Object implements INativeInterface {

        /**
         * @returns pointer to the native object wrapped by the following [[MobEffect]] object,
         * represented by a signed 64-bit integer
         */
        getPointer(): number;

        /**
         * @returns whether the effect is visible in potion effects window by default
         * @since 1.0
         */
        isVisible(): boolean;

        /**
         * @returns the numeric ID of the following effect
         * @since 1.0
         */
        getId(): number;

        /**
         * @returns whether the effect can cause harm to the entity in any way,
         * which leads to death or health points loss
         * @since 1.0
         */
        isHarmful(): boolean;

        /**
         * @returns [[MobEffect]] object for the potion effect by given numeric ID,
         * or null if effect by this ID is not defined
         */
        static getById(id: number): Nullable<MobEffect>;

    }

}
declare module KEX {

    /**
     * Wrapper for the native `MobEffectInstance` class to be used to represent
     * the potion effect that is applied to an entity, or that is going to be applied to them
     * @since 1.0
     */
    export class MobEffectInstance extends java.lang.Object implements INativeInterface {

        /**
         * @returns pointer to the native object wrapped by the [[MobEffectInstance]] object,
         * represented by a signed 64-bit integer
         */
        getPointer(): number;

        /**
         * Constructs new [[MobEffectInstance]] object by given potion effect numeric ID.
         * - Note: [[MobEffectInstance]] created via any of the exported constructors is not linked to a native object
         * @since 1.0
         */
        constructor(id: number);

        /**
         * Constructs new [[MobEffectInstance]] object by given potion effect numeric ID and effect duration.
         * - Note: [[MobEffectInstance]] created via any of the exported constructors is not linked to a native object
         * @since 1.0
         */
        constructor(id: number, duration: number);

        /**
         * Constructs new [[MobEffectInstance]] object by given potion effect numeric ID, effect duration and amplifier.
         * - Note: [[MobEffectInstance]] created via any of the exported constructors is not linked to a native object
         * @since 1.0
         */
        constructor(id: number, duration: number, amplifier: number);

        /**
         * Constructs new [[MobEffectInstance]] object using a wide set of parameters.
         * - Note: [[MobEffectInstance]] created via any of the exported constructors is not linked to a native object
         * @param id numeric ID of the potion effect
         * @param duration effect duration
         * @param amplifier effect amplifier (remember that amplifier is 1 less than effect level displayed like a roman numeral)
         * @param isAmbient unknown parameter, set to false
         * @param isEffectVisible whether the effect produces particles coming from an entity with it applied
         * @param displaysOnScreenTextureAnimation whether the effect is visible in potion effects window
         * @since 1.0
         */
        constructor(id: number, duration: number, amplifier: number, isAmbient: boolean, isEffectVisible: boolean, displaysOnScreenTextureAnimation: boolean);

        /**
         * Constructs new [[MobEffectInstance]] object using a wide set of parameters.
         * - Note: [[MobEffectInstance]] created via any of the exported constructors is not linked to a native object
         * @param id numeric ID of the potion effect
         * @param durationPeaceful effect duration on peaceful game difficulty
         * @param durationEasy effect duration on easy game difficulty
         * @param durationNormal effect duration on normal game difficulty
         * @param durationHard effect duration on hard game difficulty
         * @param amplifier effect amplifier (remember that amplifier is 1 less than effect level displayed like a roman numeral)
         * @param isAmbient unknown parameter, set to false
         * @param isEffectVisible whether the effect produces particles coming from an entity with it applied
         * @param displaysOnScreenTextureAnimation whether the effect is visible in potion effects window
         * @since 3.0
         */
        constructor(id: number, durationPeaceful: number, durationEasy: number, durationNormal: number, durationHard: number, amplifier: number, isAmbient: boolean, isEffectVisible: boolean, displaysOnScreenTextureAnimation: boolean);

        /**
         * @returns numeric ID of the potion effect
         * @since 1.0
         */
        getId(): number;

        /**
         * @returns effect duration
         * @since 1.0
         */
        getDuration(): number;

        /**
         * Sets current effect duration
         * @since 3.0 
         */
        setDuration(duration: number): void;

        /**
         * @returns whether the following [[MobEffectInstance]] has duration
         * for a specific game difficulty above peaceful 
         * @since 3.0
         */
        hasDifficultyDuration(difficulty: 1 | 2 | 3): boolean;

        /**
         * @returns effect duration for a specific game difficulty above peaceful (1 - easy, 2 - normal, 3 - hard).
         * If it's not specified, -1 is returned.
         * - Tip: duration for peaceful difficulty is obtained by usual [[MobEffectInstance.getDuration]]
         * @since 3.0
         */
        getDifficultyDuration(difficulty: 1 | 2 | 3): number;

        /**
         * Sets effect duration for a specific game difficulty above peaceful (1 - easy, 2 - normal, 3 - hard)
         * @since 3.0
         */
        setDifficultyDuration(difficulty: 1 | 2 | 3, duration: number): void;

        /**
         * @returns effect amplifier (remember that amplifier is 1 less than effect level displayed like a roman numeral)
         * @since 1.0
         */
        getAmplifier(): number;

        /** @since 1.0 */
        isAmbient(): boolean;

        /**
         * @returns whether the effect produces particles coming from an entity with it applied
         * @since 3.0
         */
        isEffectVisible(): boolean;

        /**
         * @returns whether the effect is visible in potion effects window
         * @since 1.0
         */
        displaysOnScreenTextureAnimation(): boolean;

        /** @since 1.0 */
        isNoCounter(): boolean;

        /** @since 3.0 */
        setNoCounter(noCounter: boolean): void;

        /**
         * @returns effect duration if it is applied as a splash potion
         * (it is actually `duration * 0.75`)
         * @since 3.0
         */
        getSplashDuration(): number;

        /**
         * @returns effect duration if it is applied as a lingering potion
         * (it is actually `duration * 0.25`)
         * @since 3.0
         */
        getLingerDuration(): number;

        /**
         * @returns [[MobEffect]] object for the following effect instance,
         * or null if effect is not valid
         */
        getEffect(): Nullable<MobEffect>;

    }

}
declare module KEX {

    /**
     * Object containing read-only data about a [[LocalPlayer]]'s movement.
     * 
     * Returned by [[LocalPlayer.getMoveInputHandler]].
     * 
     * Most commonly used to apply different kinds of velocity boosts to the player.
     * @since 2.0
     */
    export interface MoveInputHandler extends INativeInterface {

        /**
         * @since 2.0
         */
        clearInputState(): void;
        
        /**
         * @since 2.0
         */
        isChangeHeight(): boolean;
        
        /**
         * @since 2.0
         */
        isPlayerMoving(): boolean;
        
        /**
         * @since 2.0
         */
        isJumpDown(): boolean;
        
        /**
         * @since 2.0
         */
        wantsMoveForward(): boolean;
        
        /**
         * @since 2.0
         */
        setSneakPersistence(persistence: boolean): void;
        
        /**
         * @since 2.0
         */
        setGazeDirection(x: number, y: number, z: number): void;
        
        /**
         * @since 2.0
         */
        isMovingForward(): boolean;
        
        /**
         * @since 2.0
         */
        isMovingBackward(): boolean;
        
        /**
         * @since 2.0
         */
        isMovingLeft(): boolean;
        
        /**
         * @since 2.0
         */
        isMovingRight(): boolean;
        
        /**
         * @since 2.0
         */
        getMovingForward(): number;
        
        /**
         * @since 2.0
         */
        getMovingBackward(): number;
        
        /**
         * @since 2.0
         */
        getMovingLeft(): number;
        
        /**
         * @since 2.0
         */
        getMovingRight(): number;

    }

}
declare module KEX {

    /**
     * Wrapper for the native `Player` class extending [[Mob]]
     * and giving access to methods associated specifically with the player entity.
     * 
     * For convenience, it duplicates all the methods from InnerCore's [[PlayerActor]],
     * and of course adds bunch of new ones.
     * 
     * You can construct new [[Player]] from an existing [[Actor]] or [[Mob]],
     * or call [[Actor.asPlayer]].
     * 
     * First will throw [[java.lang.IllegalArgumentException]],
     * second will return null, if given [[Actor]] or [[Mob]] is not a [[Player]].
     * @since 2.0
     */
    export class Player extends Mob {

        /**
         * Constructs new [[Player]] object from given entity unique ID.
         * Use [[Actor.isValid]] and [[Actor.isPlayer]] first, to check if entity with
         * this ID exists and it's a [[Player]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 2.0
         */
        constructor(entity: number);
        
        /**
         * Constructs new [[Player]] object from an existing [[Mob]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Mob]] is not a [[Player]].
         * You should better use [[Actor.asPlayer]], that will return null in case your [[Mob]] is not a [[Player]].
         * @since 2.0
         */
        constructor(mob: Mob);
        
        /**
         * Constructs new [[Player]] object from an existing [[Actor]] object.
         * Throws [[java.lang.IllegalArgumentException]] if the given [[Actor]] is not a [[Player]].
         * You should better use [[Actor.asPlayer]], that will return null in case your [[Actor]] is not a [[Player]].
         * @since 2.0
         */
        constructor(actor: Actor);
        
        /**
         * Copy of [[PlayerActor.addExperience]].
         * Adds experience to the player.
         * @since 2.0
         */
        addExperience(exp: number): void;
        
        /**
         * Copy of [[PlayerActor.addItemToInventory]].
         * Adds item to player's inventory.
         * @param dropRemaining if true, surplus will be dropped near player
         * @since 2.0
         */
        addItemToInventory(id: number, count: number, data: number, extra?: com.zhekasmirnov.innercore.api.NativeItemInstanceExtra, dropRemaining?: boolean): void;
        
        /**
         * Copy of [[PlayerActor.getExhaustion]]
         * @returns player's exhaustion
         * @since 2.0
         */
        getExhaustion(): number;
        
        /**
         * Copy of [[PlayerActor.getExperience]].
         * @returns player's experience.
         * @since 2.0
         */
        getExperience(): number;
        
        /**
         * Copy of [[PlayerActor.getGameMode]].
         * @returns player's gamemode.
         * @since 2.0
         */
        getGameMode(): number;
        
        /**
         * Copy of [[PlayerActor.getHunger]].
         * @returns player's hunger
         * @since 2.0
         */
        getHunger(): number;
        
        /**
         * Copy of [[PlayerActor.getInventorySlot]].
         * @returns inventory slot's contents.
         * @since 2.0
         */
        getInventorySlot(slot: number): ItemInstance;
        
        /**
         * Copy of [[PlayerActor.getLevel]].
         * @returns player's experience level.
         * @since 2.0
         */
        getExpLevel(): number;
        
        /**
         * Copy of [[PlayerActor.getSaturation]].
         * @returns player's saturation
         * @since 2.0
         */
        getSaturation(): number;
        
        /**
         * Copy of [[PlayerActor.getScore]].
         * @returns player's score
         * @since 2.0
         */
        getScore(): number;
        
        /**
         * Copy of [[PlayerActor.getSelectedSlot]].
         * @returns player's selected slot.
         * @since 2.0
         */
        getSelectedSlot(): number;
        
        /**
         * @since 2.0
         */
        invokeUseItemNoTarget(id: number, count: number, data: number, extra: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * Copy of [[PlayerActor.setExhaustion]]
         * Sets player exhaustion.
         * @since 2.0
         */
        setExhaustion(value: number): void;
        
        /**
         * Copy of [[PlayerActor.setExperience]].
         * Sets player's experience.
         * @since 2.0
         */
        setExperience(value: number): void;
        
        /**
         * Copy of [[PlayerActor.setHunger]]
         * Sets player's hunger.
         * @since 2.0
         */
        setHunger(value: number): void;
        
        /**
         * Copy of [[PlayerActor.setInventorySlot]].
         * Sets inventory slot's contents.
         * @since 2.0
         */
        setInventorySlot(slot: number, id: number, count: number, data: number, extra: Nullable<com.zhekasmirnov.innercore.api.NativeItemInstanceExtra>): void;
        
        /**
         * @since 2.0
         */
        setExpLevel(level: number): void;
        
        /**
         * Copy of [[PlayerActor.setRespawnCoords]].
         * Sets respawn coords for the player.
         * @since 2.0
         */
        setRespawnCoords(x: number, y: number, z: number): void;
        
        /**
         * Copy of [[PlayerActor.setSaturation]].
         * Sets player's saturation.
         * @since 2.0
         */
        setSaturation(value: number): void;
        
        /**
         * Copy of [[PlayerActor.setSelectedSlot]].
         * Sets player's selected slot.
         * @since 2.0
         */
        setSelectedSlot(slot: number): void;
        
        /**
         * Copy of [[PlayerActor.spawnExpOrbs]].
         * Spawns experience orbs on coords.
         * @param value experience points value
         * @since 2.0
         */
        spawnExpOrbs(x: number, y: number, z: number, value: number): void;
        
        /**
         * @since 2.0
         */
        isAutoJumpEnabled(): boolean;
        
        /**
         * @since 2.0
         */
        getCommandPermissionLevel(): number;
        
        /**
         * @since 2.0
         */
        setPermissions(level: number): void;
        
        /**
         * @since 2.0
         */
        getPlayerPermissionLevel(): number;
        
        /**
         * @since 2.0
         */
        displayChatMessage(prefix: any_string, message: any_string): void;
        
        /**
         * @since 2.0
         */
        displayClientMessage(message: any_string): void;
        
        /**
         * @since 2.0
         */
        displayWhisperMessage(s1: any_string, s2: any_string, s3: any_string, s4: any_string): void;
        
        /**
         * @since 2.0
         */
        startSleepInBed(x: number, y: number, z: number): void;
        
        /**
         * @since 2.0
         */
        stopSleepInBed(b1: boolean, b2: boolean): void;
        
        /**
         * @since 2.0
         */
        canStartSleepInBed(): boolean;
        
        /**
         * @since 2.0
         */
        getSleepTimer(): number;
        
        /**
         * @since 2.0
         */
        getPreviousTickSleepTimer(): number;
        
        /**
         * @since 2.0
         */
        openSign(x: number, y: number, z: number): void;
        
        /**
         * @since 2.0
         */
        playEmote(emote: any_string): void;
        
        /**
         * @since 2.0
         */
        isHostingPlayer(): boolean;
        
        /**
         * @since 2.0
         */
        setGameMode(mode: number): void;
        
        /**
         * @since 2.0
         */
        addLevels(levels: number): void;
        
        /**
         * @since 2.0
         */
        setFieldOfViewModifier(modifier: number): void;
        
        /**
         * @since 2.0
         */
        startCooldown(id: number): void;
        
        /**
         * @since 2.0
         */
        startGliding(): void;
        
        /**
         * @since 2.0
         */
        stopGliding(): void;
        
        /**
         * @since 2.0
         */
        isChatAllowed(): boolean;
        
        /**
         * @since 2.0
         */
        getHasSeenCredits(): boolean;
        
        /**
         * @since 2.0
         */
        setHasSeenCredits(seen: boolean): void;
        
        /**
         * @since 2.0
         */
        shouldShowCredits(): boolean;
        
        /**
         * @since 2.0
         */
        getLuck(): number;
        
        /**
         * @since 2.0
         */
        forceAllowEating(): boolean;
        
        /**
         * @since 2.0
         */
        eat(nutrition: number, saturation: number): void;
        
        /**
         * @since 2.0
         */
        eat2(nutrition: number, saturationModifier: number): void;
        
        /**
         * @since 2.0
         */
        causeFoodExhaustion(exhaustion: number): void;
        
        /**
         * @since 2.0
         */
        isBouncing(): boolean;
        
        /**
         * @since 2.0
         */
        isForcedRespawn(): boolean;
        
        /**
         * @since 2.0
         */
        getEnchantmentSeed(): number;
        
        /**
         * @since 2.0
         */
        setEnchantmentSeed(seed: number): void;
        
        /**
         * @since 2.0
         */
        getNewEnchantmentSeed(): number;
        
        /**
         * @since 2.0
         */
        getTicksUsingItem(): number;
        
        /**
         * @since 2.0
         */
        canUseOperatorBlocks(): boolean;
        
        /**
         * @since 2.0
         */
        isOperator(): boolean;
        
        /**
         * @since 2.0
         */
        isViewer(): boolean;
        
        /**
         * @since 2.0
         */
        getXpNeededForNextLevel(): number;
        
        /**
         * @since 2.0
         */
        getXpNeededForLevelRange(min: number, max: number): number;
        
        /**
         * @since 2.0
         */
        isEmoting(): boolean;
        
        /**
         * @since 2.0
         */
        getLevelProgress(): number;
        
        /**
         * @since 2.0
         */
        getMapIndex(): number;
        
        /**
         * @since 2.0
         */
        setMapIndex(index: number): void;
        
        /**
         * @since 2.0
         */
        getAttackDamage(): number;
        
        /**
         * @since 2.0
         */
        isHungry(): boolean;
        
        /**
         * @since 2.0
         */
        isInRaid(): boolean;
        
        /**
         * @since 2.0
         */
        hasOpenContainer(): boolean;
        
        /**
         * @since 2.0
         */
        isUsingItem(): boolean;
        
        /**
         * @since 2.0
         */
        getUnderwaterLightLevel(): number;
        
        /**
         * @since 2.0
         */
        setUnderwaterLightLevel(level: number): void;
        
        /**
         * @since 2.0
         */
        canBeSeenOnMap(): boolean;

    }

}
declare module KEX {
    
    /**
     * The object used to modify player's reach distance
     * (maximum distance from which the player can reach blocks or mobs and interact with them)
     * @since 3.0
     */
    export class ReachDistanceModifier extends java.lang.Object {

        /**
         * Constructs new [[ReachDistanceModifier]] object and adds it to the global list.
         * Remember that it must only be created on the client side, so you probably will have to use client packets.
         * This object contains two values: `modifier` and `multiplier`.
         * ```cpp
         * // Pseudocode of reach distance modifiers application
         * // 12 or 6 depending on whether the player is in creative mode or not
         * float result = getReachDistance(); 
         * // adding all the modifiers to the result
         * for(mod : modifiers) {
         *  if(mod.enabled) {
         *      result += mod.modifier;
         *  }
         * }
         * // multiplying result by all the multipliers
         * for(mod : modifiers) {
         *  if(mod.enabled) {
         *      result *= mod.multiplier;
         *  }
         * }
         * // done!
         * return result;
         * ```
         * By default the modifier is 0, the multiplier is 1
         * @since 3.0
         */
        constructor();

        /**
         * Sets new modifier
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setModifier(modifier: number): ReachDistanceModifier;

        /**
         * Sets new multiplier
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        setMultiplier(multiplier: number): ReachDistanceModifier;

        /**
         * Enables the following modifier object
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        enable(): ReachDistanceModifier;

        /**
         * Disables the following modifier object
         * @returns reference to itself to be used in sequential calls
         * @since 3.0
         */
        disable(): ReachDistanceModifier;

        /**
         * @returns `modifier` value of the following object at the moment
         * @since 3.0
         */
        getModifier(): number;

        /**
         * @returns `multiplier` value of the following object at the moment
         * @since 3.0
         */
        getMultiplier(): number;

        /**
         * @returns whether the following modifier object is enabled at the moment
         * @since 3.0
         */
        isActive(): boolean;

    }

}
/**
 * Extension for InnerCore's
 * <a href="https://docs.mineprogramming.org/api/modules/Recipes.html" target="_blank">Recipes</a>
 * module adding new methods to register recipes of other types, not supported before.
 * @since 3.0
 */
declare namespace Recipes {

    /**
     * Adds new custom smithing table recipe
     * @param baseID numeric ID of the item to put in the left slot of the smithing table
     * @param additionID numeric ID of the item to put in the central slot of the smithing table
     * @param resultID numeric ID of the item that will appear in the right slot of the smithing table.
     * If the first ingredient has any NBT data, like custom name, enchantments, [[ItemExtraData]] etc.,
     * this data will be copied into the result item instance.
     * @since 3.0
     */
    export function addSmithingTableRecipe(baseID: number, additionID: number, resultID: number): void;

    /**
     * Removes smithing table recipe by given two ingredients' numeric IDs,
     * if the recipe with this ingredients exists.
     * @since 3.0
     */
    export function removeSmithingTableRecipe(baseID: number, additionID: number): void;

    /**
     * @returns list of all registered smithing table recipes having the item with given numeric ID as a result
     * @since 3.0
     */
    export function getSmithingTableRecipesByResult(resultID: number): SmithingTableRecipe[];

    /**
     * @return list of all registered smithing table recipes having the item with given numeric ID as a first ingredient
     * @since 3.0
     */
    export function getSmithingTableRecipesByBase(baseID: number): SmithingTableRecipe[];

    /**
     * @returns list of all registered smithing table recipes, both vanilla and custom
     * @since 3.0
     */
    export function getAllSmithingTableRecipes(): SmithingTableRecipe[];

    /**
     * Immutable object used internally to store custom smithing table recipes.
     * @since 3.0
     */
    export interface SmithingTableRecipe {

        /**
         * Numeric ID of the item that must be put in the left slot
         * of the smithing table along with [[additionID]] in the central slot
         * to get [[resultID]] in the right slot
         */
        readonly baseID: number;

        /**
         * Numeric ID of the item that must be put in the central slot
         * of the smithing table along with [[baseID]] in the left slot
         * to get [[resultID]] in the right slot
         */
        readonly additionID: number;

        /**
         * Numeric ID of the item which you will get in the right slot of the smithing table
         * if you put [[baseID]] in the left slot and [[additionID]] in the central slot.
         * If the item instance of [[baseID]] has any NBT data, like custom name, enchantments, [[ItemExtraData]] etc.,
         * this data will be copied into the instance of [[resultID]].
         */
        readonly resultID: number;

    }

}
declare module KEX {

    /**
     * Wrapper for the native `Slime` class extending [[Mob]]
     * and giving access to more methods of entities of this class.
     * 
     * You can construct new [[Slime]] from an existing [[Actor]] or [[Mob]],
     * or call [[Actor.asMob]] and [[Mob.asSlime]].
     * 
     * First will throw [[java.lang.IllegalArgumentException]],
     * second will return null, if given [[Actor]] or [[Mob]] is not a [[Slime]].
     * @since 1.0
     */
    export class Slime extends Mob {

        /**
         * Constructs new [[Slime]] object from given entity unique ID.
         * Use [[Actor.isValid]], [[Actor.isMob]] and [[Mob.isSlime]] first, to check if entity with
         * this ID exists and it's a [[Slime]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 1.0
         */
        constructor(entity: number);
        
        /**
         * Constructs new [[Slime]] object from an existing [[Mob]] object.
         * Use [[Mob.isSlime]] first, to check if your [[Mob]] is a [[Slime]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 1.0
         */
        constructor(mob: Mob);
        
        /**
         * Constructs new [[Slime]] object from an existing [[Actor]] object.
         * Use [[Actor.isMob]] and [[Mob.isSlime]] first, to check if your [[Actor]] is a [[Slime]], or a
         * [[java.lang.IllegalArgumentException]] will be thrown.
         * @since 1.0
         */
        constructor(actor: Actor);
        
        /**
         * @since 1.0
         */
        decreaseSquish(): number;
        
        /**
         * @since 1.0
         */
        justJumped(): boolean;
        
        /**
         * @since 1.0
         */
        justLanded(): boolean;
        
        /**
         * @since 1.0
         */
        getSquishValue(): number;
        
        /**
         * @since 1.0
         */
        getOldSquishValue(): number;
        
        /**
         * @since 1.0
         */
        getTargetSquish(): number;
        
        /**
         * @since 1.0
         */
        getSlimeSize(): number;
        
        /**
         * @since 1.0
         */
        setSlimeSize(size: number): void;

    }

}
declare module KEX {

    /**
     * Successor to the
     * <a href="https://github.com/DMHYT/LIBS/tree/master/source/TextureWorker" target="_blank">TextureWorker</a>
     * library, rewritten to Java and restructured.
     * @since 3.0
     */
    export module TextureWorker {

        /**
         * Internal method to paint a whole picture represented as a [[android.graphics.Bitmap]] instance,
         * to a specific RGB(A?) color.
         * @returns your picture painted to the given color
         * @since 3.0
         */
        export function changeBitmapColor(source: android.graphics.Bitmap, colorR: number, colorG: number, colorB: number, colorA?: number): android.graphics.Bitmap;
        
        /**
         * Internal method to paint a whole picture represented as a [[android.graphics.Bitmap]] instance,
         * to a specific RGB(A?) color represented as a color int.
         * @returns your picture painted to the given color
         * @since 3.0
         */
        export function changeBitmapColor(source: android.graphics.Bitmap, color: number): android.graphics.Bitmap;
        
        /**
         * @returns object to describe and create a texture from multiple other textures, and write it to storage
         * @since 3.0
         */
        export function createTextureWithOverlays(): OverlaidTextureBuilder;
        
        /**
         * @returns object to describe and create a texture made from another texture
         * with a specific color applied to it, and write it to the storage.
         * @since 3.0
         */
        export function createPaintedTexture(): PaintedTextureBuilder;
        
        /**
         * @returns object to describe and create a texture made from another texture
         * with grayscale filter applied to it, and write it to the storage.
         * @since 3.0
         */
        export function createGrayscaledTexture(): GrayscaledTextureBuilder;

        /**
         * Object returned by [[TextureWorker.createTextureWithOverlays]]
         * used to specify parameters for the texture made from multiple other textures,
         * create it and write to storage.
         * @since 3.0
         */
        export interface OverlaidTextureBuilder {
            
            /**
             * Specifies the parameters of the resulting [[android.graphics.Bitmap]] object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            bitmap(width: number, height: number, config?: android.graphics.Bitmap.Config): OverlaidTextureBuilder;
            
            /**
             * Adds an overlay by given path to the picture.
             * @param path absolute path of the directory, where the overlay's source texture is stored
             * @param name texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            overlay(path: any_string, name: any_string): OverlaidTextureBuilder;
            
            /**
             * Adds an overlay by given path to the picture, with the RGB(A?) color applied to it.
             * @param path absolute path to the directory, where the overlay's source texture is stored
             * @param name texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            overlay(path: any_string, name: any_string, colorR: number, colorG: number, colorB: number, colorA?: number): OverlaidTextureBuilder;
            
            /**
             * Adds an overlay represented as a [[android.graphics.Bitmap]] object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            overlay(bitmap: android.graphics.Bitmap): OverlaidTextureBuilder;
            
            /**
             * Adds an overlay represented as a [[android.graphics.Bitmap]] object, with the RGB(A?) color applied to it.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            overlay(bitmap: android.graphics.Bitmap, colorR: number, colorG: number, colorB: number, colorA?: number): OverlaidTextureBuilder;
            
            /**
             * Specifies the path to the resulting texture in the storage.
             * @param path absolute poth to the directory, where the resulting texture will be stored
             * @param name resulting texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            result(path: any_string, name: any_string): OverlaidTextureBuilder;
            
            /**
             * @returns [[android.graphics.Bitmap]] object of the resulting texture,
             * or null if it had been already written to storage before, or [[bitmap]] was not called
             * @since 3.0
             */
            create(): Nullable<android.graphics.Bitmap>;

        }

        /**
         * Object returned by [[TextureWorker.createPaintedTexture]]
         * used to describe and create a texture made from another texture
         * with a specific color applied to it, and write it to the storage.
         * @since 3.0
         */
        export interface PaintedTextureBuilder {
            
            /**
             * Specifies the parameters of the resulting [[android.graphics.Bitmap]] object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            bitmap(width: number, height: number, config?: android.graphics.Bitmap.Config): PaintedTextureBuilder;
            
            /**
             * Specifies the path to the source texture in the storage.
             * @param path absolute poth to the directory, where the source texture will be stored
             * @param name source texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            source(path: any_string, name: any_string): PaintedTextureBuilder;
            
            /**
             * Specifies the source texture represented as a [[android.graphics.Bitmap]] object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            source(bitmap: android.graphics.Bitmap): PaintedTextureBuilder;
            
            /**
             * Specifies the RGB(A?) color the texture will be painted in.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            color(r: number, g: number, b: number, a?: number): PaintedTextureBuilder;
            
            /**
             * Specifies the path to the resulting texture in the storage.
             * @param path absolute poth to the directory, where the resulting texture will be stored
             * @param name resulting texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            result(path: any_string, name: any_string): PaintedTextureBuilder;
            
            /**
             * @returns [[android.graphics.Bitmap]] object of the resulting texture,
             * or null if it had been already written to storage before, or [[bitmap]] was not called
             * @since 3.0
             */
            create(): Nullable<android.graphics.Bitmap>;

        }

        /**
         * Object returned by [[TextureWorker.createGrayscaledTexture]]
         * used to describe and create a texture made from another texture
         * with grayscale filter applied to it, and write it to the storage.
         * @since 3.0
         */
        export interface GrayscaledTextureBuilder {
            
            /**
             * Specifies the path to the source texture in the storage.
             * @param path absolute poth to the directory, where the source texture will be stored
             * @param name source texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            source(path: any_string, name: any_string): GrayscaledTextureBuilder;
            
            /**
             * Specifies the source texture represented as a [[android.graphics.Bitmap]] object.
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            source(src: android.graphics.Bitmap): GrayscaledTextureBuilder;
            
            /**
             * Specifies the path to the resulting texture in the storage.
             * @param path absolute poth to the directory, where the resulting texture will be stored
             * @param name resulting texture's name without `.png`
             * @returns reference to itself to be used in sequential calls
             * @since 3.0
             */
            result(path: any_string, name: any_string): GrayscaledTextureBuilder;
            
            /**
             * @returns [[android.graphics.Bitmap]] object of the resulting texture,
             * or null if it had been already written to storage before, or [[bitmap]] was not called
             * @since 3.0
             */
            create(): Nullable<android.graphics.Bitmap>;

        }

    }

}
declare module KEX {

    /**
     * Wrapper for the native `TickingAreasManager` class to add or remove
     * new ticking areas to the world the player is in at the moment.
     * @since 3.0
     */
    export interface TickingAreasManager extends INativeInterface {

        /**
         * @returns whether there is at least one active ticking area
         * in the world at the moment.
         * @since 3.0
         */
        hasActiveAreas(): boolean;

        /**
         * @returns how many ticking areas are there
         * in the given dimension at the moment.
         * @since 3.0
         */
        countAreasIn(dimension: WorldOrDimension): number;

        /**
         * @returns how many ticking areas are there
         * in all dimensions of the current Minecraft world at the moment.
         * @since 3.0
         */
        countAllAreas(): number;

        /**
         * @returns whether a ticking area exists by given name
         * in the given dimension. Dimension parameter is needed because
         * every dimension has its own ticking areas list, and it's possible
         * that two areas with the same name exist at the same time in different dimensions
         * @since 3.0
         */
        hasArea(areaName: any_string, dimension: WorldOrDimension): number;

        /**
         * Adds new rectangle-shaped ticking area to the given dimension.
         * It covers not only the blocks included in the resulting rectangle,
         * but all the chunks that intersect with this rectangle.
         * In this overload, the name of the area is set to default (`"Area{N}"`)
         * @param dimension dimension where to create the ticking area
         * @param x1 X coordinate of the area's start position
         * @param z1 Z coordinate of the area's start position
         * @param x2 X coordinate of the area's end position
         * @param z2 Z coordinate of the area's end position
         * @since 3.0
         */
        addRectangleArea(dimension: WorldOrDimension, x1: number, z1: number, x2: number, z2: number): void;

        /**
         * Adds new rectangle-shaped ticking area to the given dimension.
         * It covers not only the blocks included in the resulting rectangle,
         * but all the chunks that intersect with this rectangle.
         * @param dimension dimension where to create the ticking area
         * @param name area name, that must be unique for the given dimension
         * @param x1 X coordinate of the area's start position
         * @param z1 Z coordinate of the area's start position
         * @param x2 X coordinate of the area's end position
         * @param z2 Z coordinate of the area's end position
         * @since 3.0
         */
        addRectangleArea(dimension: WorldOrDimension, name: any_string, x1: number, z1: number, x2: number, z2: number): void;

        /**
         * Adds new circle-shaped ticking area to the given dimension.
         * It covers not only the blocks included in the resulting circle,
         * but all the chunks that intersect with this circle.
         * In this overload, the name of the area is set to default (`"Area{N}"`)
         * @param dimension dimension where to create the ticking area
         * @param x X coordinate of the area's center position
         * @param z Z coordinate of the area's center position
         * @param radius area's radius in meters (blocks)
         * @since 3.0
         */
        addCircleArea(dimension: WorldOrDimension, x: number, z: number, radius: number): void;

        /**
         * Adds new circle-shaped ticking area to the given dimension.
         * It covers not only the blocks included in the resulting circle,
         * but all the chunks that intersect with this circle.
         * In this overload, the name of the area is set to default (`"Area{N}"`)
         * @param dimension dimension where to create the ticking area
         * @param name area name, that must be unique for the given dimension
         * @param x X coordinate of the area's center position
         * @param z Z coordinate of the area's center position
         * @param radius area's radius in meters (blocks)
         * @since 3.0
         */
        addCircleArea(dimension: WorldOrDimension, name: any_string, x: number, z: number, radius: number): void;

        /**
         * Removes all the ticking areas from given dimension containing the given position.
         * @since 3.0
         */
        removeAreaByPosition(dimension: WorldOrDimension, x: number, z: number): void;

        /**
         * Removes the ticking area by given name in given dimension, if the area with this name exists.
         * @since 3.0
         */
        removeAreaByName(dimension: WorldOrDimension, name: any_string): void;

        /**
         * Method used internally when you don't specify the name for a new ticking area.
         * @returns names that look like `"Area{N}"`, where `{N}` is an incrementing integer.
         * @since 3.0
         */
        findUsableDefaultName(dimension: WorldOrDimension): jstring;

    }
    
}
declare module KEX {

    /**
     * Module to register custom block entity types and assign them for specific blocks.
     * 
     * Unlike InnerCore's [[TileEntity]], these entities are registered as vanilla tile types
     * like chest, hopper, brewing stand, furnace etc., via native code.
     * 
     * A block entity type must be represented by a non-abstract Java class inherited from `vsdum.kex.modules.tileentity.BlockActor`
     * (despite the latter class doesn't have any abstract methods required to implement).
     * 
     * After creating a tile entity class, register the numeric ID for it using [[TileEntityModule.registerTileEntityType]] method.
     * You must store the returned value in order to use it later for the blocks that will have this tile entity type.
     * 
     * So, for example:
     * ```java
     * package visualstudiodan.test;
     * 
     * import vsdum.kex.modules.TileEntityModule;
     * import vsdum.kex.modules.tileentity.BlockActor;
     * import vsdum.kex.util.mcmath.BlockPos;
     * 
     * public class TestTile extends BlockActor {
     *  public static final int TYPE = TileEntityModule.registerTileEntityType("test_tile", TestTile::new);
     *  public TestTile(long ptr, int type, BlockPos blockPos) {
     *      super(ptr, type, blockPos);
     *  }
     * }
     * ```
     * Then in JS/TS:
     * ```ts
     * const TEST_TILE_TYPE = WRAP_JAVA("visualstudiodan.test.TestTile").TYPE;
     * IDRegistry.genBlockID("testBlock");
     * Block.createBlock("testBlock", [{...}]);
     * KEX.TileEntityModule.registerForBlock(BlockID.testBlock, TEST_TILE_TYPE);
     * ```
     * @since 4.0
     */
    export module TileEntityModule {

        /**
         * Registers new custom native block entity type
         * @param typeName unique string identifier of the new block entity type, traditionally in snake case
         * @param callback function that will be called every time the custom tile is about to be created,
         * and must return the Java wrapper object of the tile
         * @returns generated numeric ID for the created block entity type. Should be stored somewhere in your code
         * in order to assign this type for a block later using [[registerForBlock]].
         * @since 4.0
         */
        export function registerTileEntityType(typeName: any_string, callback: TileEntityCreationCallback): number;

        /**
         * Assigns the custom native block entity type by its given numeric ID, to the block by its given numeric ID.
         * It means every time the block with given ID is placed, a tile of type of given ID will be created for this block,
         * also calling a [[TileEntityCreationCallback]] you specified while registering this block entity type.
         * @since 4.0
         */
        export function registerForBlock(blockID: number, type: number): void;

        /**
         * Function used in [[TileEntityModule.registerTileEntityType]] method.
         * It will be called every time the custom tile is created, and must return the Java wrapper object
         * of the tile (so it'd be better to implement this callback in Java as well).
         * 
         * **Remember!** All the parameters provided by the callback are crucial for the created block entity
         * and required to be put into its Java wrapper object.
         * @param pointer pointer to the native block entity object that will have to be wrapped by your Java object,
         * represented by a signed 64-bit integer
         * @param type numeric ID of the following block entity's type
         * @param pos block coordinates where the tile is being created, [[Math.BlockPos]] since 5.0
         * (it was like that from the very beginning, but until 5.0 [[Math.BlockPos]] has not been declared)
         * @since 4.0
         */
        export interface TileEntityCreationCallback {
            (pointer: number, type: number, pos: Math.BlockPos): BlockActor;
        }

        /**
         * Base Java abstract class for custom native block entities. In terms of 
         * TypeScript declarations it's just an interface to call particular
         * block entity methods when needed, on block entity objects, obtained
         * for example using [[BlockSource.getCustomBlockEntity]] method
         * @since 4.0
         */
        export interface BlockActor extends INativeInterface {

            /**
             * [[NetworkEntityType]] object for the type of the following [[BlockActor]],
             * or null if this [[BlockActor]]'s network utilities weren't setup yet
             * @since 4.0
             */
            networkEntityType: Nullable<NetworkEntityType>;
            
            /**
             * [[NetworkEntity]] object for the type of the following [[BlockActor]],
             * or null if this [[BlockActor]]'s network utilities weren't setup yet
             * @since 4.0
             */
            networkEntity: Nullable<NetworkEntity>;
            
            /**
             * [[SyncedNetworkData]] object for the type of the following [[BlockActor]],
             * or null if this [[BlockActor]]'s network utilities weren't setup yet
             * @since 4.0
             */
            networkData: Nullable<SyncedNetworkData>;
            
            /**
             * [[ItemContainer]] object for the type of the following [[BlockActor]],
             * or null if this [[BlockActor]]'s network utilities weren't setup yet
             * @since 4.0
             */
            container: Nullable<ItemContainer>;
            
            /**
             * @returns block coordinates of the following [[BlockActor]]
             * 
             * [[Math.BlockPos]] since 5.0 (it was like that from the very beginning,
             * but until 5.0 [[Math.BlockPos]] has not been declared)
             * @since 4.0
             */
            getBlockPos(): Math.BlockPos;
            
            /**
             * @returns numeric ID of the dimension the following [[BlockActor]] is in
             * @since 4.0
             */
            getDimension(): number;
            
            /**
             * Invokes native block entity position getter in order to update it
             * for the following Java wrapper. Used mainly internally, for example
             * when the [[BlockActor]] is moved by a piston etc.
             * @returns reference to itself to be used in sequential calls
             * @since 4.0
             */
            updateBlockPos(): BlockActor;
            
            /**
             * @returns [[BlockState]] object of the block having the following [[BlockActor]],
             * or null if this [[BlockActor]] doesn't have a world object for some reason
             * @since 4.0
             */
            getBlockState(): Nullable<BlockState>;
            
            /**
             * @returns [[BlockSource]] object of the world the following [[BlockActor]] is in,
             * or null if this [[BlockActor]] doesn't have a world object for some reason
             * @since 4.0
             */
            getWorld(): Nullable<BlockSource>;
            
            /**
             * @returns whether the following [[BlockActor]] has a [[BlockSource]] world object
             * @since 4.0
             */
            hasWorld(): boolean;
            
            /**
             * @returns numeric ID of the block entity type the following [[BlockActor]] has
             * @since 4.0
             */
            getType(): number;
            
            /**
             * @returns non-negative amount of ticks the following [[BlockActor]] exists in the world.
             * After re-entering the level, this value is reset back to zero.
             * @since 4.0
             */
            getLife(): number;
            
            /**
             * @returns whether the following [[BlockActor]] object refers to the client-side
             * native copy of the block entity
             * @since 4.0
             */
            isClient(): boolean;
            
            /**
             * @returns whether the following [[BlockActor]] object refers to the server-side
             * native copy of the block entity
             * @since 4.0
             */
            isServer(): boolean;
            
            /**
             * Method called by Minecraft when entering the level and loading the following [[BlockActor]].
             * 
             * In your [[save]] method implementation you can store some additional data of the block entity
             * to the compound tag given there, and then read it from the compound tag given in [[load]] method.
             * @since 4.0
             */
            load(data: NBT.CompoundTag): void;
            
            /**
             * Method called by Minecraft when leaving the level and unloading the following [[BlockActor]].
             * 
             * In your [[save]] method implementation you can store some additional data of the block entity
             * to the compound tag given there, and then read it from the compound tag given in [[load]] method.
             * @since 4.0
             */
            save(data: NBT.CompoundTag): boolean;
            
            /**
             * Method called by Minecraft every tick (20 times a second)
             * @since 4.0
             */
            tick(): void;
            
            /**
             * @since 4.0
             */
            isFinished(): boolean;
            
            /**
             * @since 4.0
             */
            onChanged(): void;
            
            /**
             * @since 4.0
             */
            isMovable(): boolean;
            
            /**
             * @since 4.0
             */
            onPlace(): void;
            
            /**
             * @since 4.0
             */
            onMove(): void;
            
            /**
             * @since 4.0
             */
            onRemoved(): void;
            
            /**
             * @since 4.0
             */
            triggerEvent(id: number, type: number): void;

            /**
             * @since 5.0
             */
            onNeighborChanged(pos: Math.BlockPos): void;
            
            /**
             * @since 4.0
             */
            getCustomName(): Nullable<jstring>;
            
            /**
             * @since 4.0
             */
            setCustomName(customName: any_string): void;
            
            /**
             * @since 4.0
             */
            getName(): Nullable<jstring>;
            
            /**
             * Method called by Minecraft when chunk containing the following [[BlockActor]] is being loaded.
             * @since 4.0
             */
            onChunkLoaded(): void;
            
            /**
             * Method called by Minecraft when chunk containing the following [[BlockActor]] is being unloaded.
             * @since 4.0
             */
            onChunkUnloaded(): void;
            
            /**
             * @param vec [[Math.Vec3d]] since 5.0 (it was like that from the very beginning,
             * but until 5.0 [[Math.Vec3d]] has not been declared)
             * @since 4.0
             */
            onUse(player: Player, side: number, vec: Math.Vec3d): boolean;
            
            /**
             * @since 4.0
             */
            getScreenByName(container: ItemContainer, screenName: any_string): Nullable<UI.IWindow>;

        }

    }

}
declare module KEX {

    /**
     * Global module patching the whole InnerCore's [[ToolAPI]] module
     * to replace crutchy custom tools system with C++&Java logics,
     * which not only duplicates the existing system with a slight performance boost,
     * but also adds new features that have been impossible for years with [[ToolAPI]].
     * 
     * To prevent Kernel Extension API from overloading with duplicate methods,
     * [[ToolsModule]]'s internal functions are not added to this documentation. That's because
     * you can still use equivalent methods [[ToolAPI]] and [[Item]] modules.
     * 
     * This module has come through loads of bug fixes because
     * making full backward compatibility was an extremely difficult task,
     * but finally, since Kernel Extension **3.0**, the native tools API became
     * the most stable ever.
     * 
     * @since 1.0
     */
    export module ToolsModule {

        /**
         * @returns [[ItemTier]] object by given tool material name, or null
         * if tool material with given name has not been registered.
         * @since 1.0
         */
        export function getTierByName(tierName: any_string): Nullable<ItemTier>;

        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a tool item.
         * @since 2.2
         */
        export function isTool(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a sword item.
         * @since 2.2
         */
        export function isSword(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as an axe item.
         * @since 2.2
         */
        export function isAxe(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a pickaxe item.
         * @since 2.2
         */
        export function isPickaxe(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a shovel item.
         * @since 2.2
         */
        export function isShovel(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a hoe item.
         * @since 2.2
         */
        export function isHoe(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a custom tool item. A problem is that items from the mods
         * that don't use `ToolLib` **23** or higher and `BlockEngine` **9** or higher,
         * are considered as custom tools. Maybe in future updates this defect will be resolved.
         * @since 2.2
         */
        export function isCustomTool(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a shears item.
         * @since 2.2
         */
        export function isShears(id: number): boolean;
        
        /**
         * @returns whether the item with given numeric ID has already been
         * registered as a flint and steel item.
         * @since 2.2
         */
        export function isFlintAndSteel(id: number): boolean;

        /**
         * Wrapper for the native `Item::Tier` class
         * used to register custom materials for tools, same as [[ToolAPI.ToolMaterial]],
         * but the created object is linked to the equivalent native object.
         * @since 1.0
         */
        export class ItemTier extends java.lang.Object implements INativeInterface {

            /**
             * @returns pointer to the native object wrapped by the following [[ItemTier]] object,
             * represented by a signed 64-bit integer
             */
            getPointer(): number;

            /**
             * Constructs new [[ItemTier]] object including equivalent native object,
             * and adds it to the lookup map used in [[ToolsModule.getTierByName]].
             * @param name your tool material's name, must be unique or you'll get a [[java.lang.IllegalArgumentException]]
             * telling you the tool material with your name has already been registered
             * @param level tool digging level, (1 - wooden, 2 - stone, 3 - iron, ...)
             * @param uses tool durability
             * @param speed how many times faster the tool with this material will mine blocks of its types
             * @param attackDamageBonus how many attack damage will be added to the tool's base damage from its material
             * @param enchantmentValue the more it is, the better enchantments you'll get with less experience levels on the enchanting table
             * @since 1.0 
             */
            constructor(name: any_string, level: number, uses: number, speed: number, attackDamageBonus: number, enchantmentValue: number);
            
            /**
             * @returns digging level of the tools with the following [[ItemTier]]
             * @since 1.0 
             */
            getLevel(): number;
            
            /**
             * @returns durability of the tools with the following [[ItemTier]]
             * @since 1.0 
             */
            getUses(): number;
            
            /**
             * @returns how many times faster the tools with the following [[ItemTier]] will mine blocks of their types
             * @since 1.0 
             */
            getSpeed(): number;
            
            /**
             * @returns how many attack damage will be added to the base damage of the tools with the following [[ItemTier]]
             * @since 1.0 
             */
            getAttackDamageBonus(): number;
            
            /**
             * @returns the value used when enchanting a tool with the following [[ItemTier]].
             * The more it is, the better enchantments you will get with less experience levels.
             * @since 1.0 
             */
            getEnchantmentValue(): number;

        }

    }

}
declare type jstring = java.lang.String;


/**
 * Type alias to mark that both Java and JS string can be used as a parameter somewhere.
 * Used in all methods imported from Java containing `String` parameters.
 */
declare type any_string = string | jstring;


/**
 * Interface implemented by all KEX classes that are interfaces
 * to equivalent native objects. Has only one method to overload,
 * that must return pointer to the native object represented by a signed 64-bit integer.
 */
declare interface INativeInterface extends java.lang.Object {

    /**
     * @returns pointer to the native object wrapped by the following native interface object,
     * represented by a signed 64-bit integer
     */
    getPointer(): number;

}


/**
 * Type alias to mark that [[KEX.TickingAreasManager]] and [[KEX.ChunksModule]] methods
 * can take the dimension in three representations:
 * - The numeric ID of the dimension
 * - The [[BlockSource]] object associated with the needed dimension
 * - The [[KEX.Dimension]] object for the needed dimension
 */
declare type WorldOrDimension = number | BlockSource | KEX.Dimension;


/**
 * Object used in [[KEX.LootModule]] to specify some quantity ranges,
 * like item count, data/damage, number of loot pool rolls etc.
 */
declare type MinMax = { min: number, max: number };


/**
 * Type alias listing all the vanilla structure string types.
 * Used in `"exploration_map"` loot table entry function's JSON description.
 */
declare type FeatureTypes =
    "buriedtreasure" |
    "endcity" |
    "fortress" |
    "mansion" |
    "mineshaft" |
    "monument" |
    "pillageroutpost" |
    "ruins" |
    "shipwreck" |
    "stronghold" |
    "temple" |
    "village";


/**
 * Type alias listing all the vanilla enchantment string types.
 * Used in `"specific_enchants"` loot table entry function's JSON description.
 */
declare type EnchantTypes =
    "protection" |
    "fire_protection" |
    "feather_falling" |
    "blast_protection" |
    "projectile_protection" |
    "thorns" |
    "respiration" |
    "aqua_affinity" |
    "depth_strider" |
    "sharpness" |
    "smite" |
    "bane_of_arthropods" |
    "knockback" |
    "fire_aspect" |
    "looting" |
    "efficiency" |
    "silk_touch" |
    "unbreaking" |
    "fortune" |
    "power" |
    "punch" |
    "flame" |
    "infinity" |
    "luck_of_the_sea" |
    "lure" |
    "frost_walker" |
    "mending" |
    "binding_curse" |
    "vanishing_curse" |
    "impaling" |
    "riptide" |
    "loyalty" |
    "channeling";


/**
 * Type alias listing all the string food saturation modifiers defined by vanilla.
 * - `"poor"` = 0.2
 * - `"low"` = 0.6
 * - `"normal"` = 1.2
 * - `"good"` = 1.6
 * - `"max"` = 2.0
 * - `"supernatural"` = 2.4
 */
declare type VanillaFoodSaturationModifiers =
    "poor" |
    "low" |
    "normal" |
    "good" |
    "max" |
    "supernatural";


/**
 * Type alias listing all the vanilla potion effect string types.
 * Used in [[Item.FoodEffect.name]].
 */
declare type PotionEffectTypes =
    "movement_speed" |
    "movement_slowdown" |
    "dig_speed" |
    "dig_slowdown" |
    "damage_boost" |
    "heal" |
    "harm" |
    "jump" |
    "confusion" |
    "regeneration" |
    "damage_resistance" |
    "fire_resistance" |
    "water_breathing" |
    "invisibility" |
    "blindness" |
    "night_vision" |
    "hunger" |
    "weakness" |
    "poison" |
    "wither" |
    "health_boost" |
    "absorption" |
    "saturation" |
    "levitation" |
    "fatal_poison" |
    "conduit_power" |
    "slow_falling" |
    "bad_omen" |
    "village_hero";
// /**
//  * This declaration file is made for the developers,
//  * that made their project KEX-dependent inside of `launcher.js` script.
//  * 
//  * The code there must look like this:
//  * ```js
//  * ConfigureMultiplayer({...});
//  * 
//  * ModAPI.addAPICallback("KernelExtension", function(api) {
//  *     if(typeof api.getKEXVersionCode === "function" && api.getKEXVersionCode() >= preferred_version) {
//  *         Launch({ KEX: api });
//  *     }
//  * });
//  * ```
//  * If you want KEX API object in your mod to be called something except `KEX`, when adding
//  * `kex.d.ts` file to your project, you have to replace all `declare module KEX` with `declare module YourName` there.
//  */
declare module KEX {

    /**
     * @returns current version of Kernel Extension mod installed in your modpack,
     * represented as an array of three integers. The first number means release,
     * the second means beta, and the third means hotfix.
     * @since 1.2
     */
    export function getKEXVersion(): [ number, number, number ];

    /**
     * @returns current version of Kernel Extension mod installed in your modpack,
     * represented as a three-digit integer,
     * whose digits are release, beta and hotfix number correspondingly.
     * @since 1.3
     */
    export function getKEXVersionCode(): number;

}