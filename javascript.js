// Assigning loading ids
document.getElementById("LoadingInfo").innerHTML = "Applying Nametag Nametags"

var LoadingInfoId = document.getElementById("LoadingInfo");
var LoadingBarId = document.getElementById("LoadingBar");

// Assigning Variable Ids
LoadingInfoId.innerHTML = "Applying Nametags";
LoadingBarId.style.width = "2%";

var BodyId = document.getElementById("Body");
var HtmlId = document.getElementById("Html");
var MainId = document.getElementById("Main");
var ResourceManagerId = document.getElementById("ResourceManager");
var ControlPanelId = document.getElementById("ControlPanel");
var InfoBoxId = document.getElementById("InfoBox");
var RightBoxId = document.getElementById("RightBox");
var HomeLinkId = document.getElementById("HomeLink");
var WanderLinkId = document.getElementById("WanderLink");
var HomeControlsId = document.getElementById("HomeControls");
var WanderControlsId = document.getElementById("WanderControls");
var ScavengeButtonId = document.getElementById("ScavengeButton");
var FoodId = document.getElementById("Food");
var FoodInfoId = document.getElementById("FoodInfo");
var WoodId = document.getElementById("Wood");
var WoodInfoId = document.getElementById("WoodInfo");
var ScrapId = document.getElementById("Scrap");
var ScrapInfoId = document.getElementById("ScrapInfo");

// Assigning Save Variables
LoadingInfoId.innerHTML = "Creating Numbers";
LoadingBarId.style.width = "4%";

var GameStage = 0;
var Food = 100;
var FoodDemand = 1;
var FoodPerSecond = 0;
var FoodDepleted = 0;
var ScavengeRoll = 0;
var Wood = 0;
var Scrap = 0;
var ScavengeEff = 1;
var ScavengeBase = 1;
var ScavengeFoodNum = 0;
var ScavengeWoodNum = 0;
var ScavengeScrapNum = 0;
var ScavengeUnlocks = 3;
var LastInfo = "";
var Scavenged = 0;
var WoodUnlocked = 0;
var WoodPerSecond = 0;
var ScrapPerSecond = 0;
var WoodDemand = 0;
var ScrapDemand = 0;
var Starving = 0;
var ScrapUnlocked = 0;
var FarmUnlocked = 0;
var Farms = 0;
var FarmFoodProduction = 0.25;
var FarmPrice = 50;
var FarmingUnlocked = 0;
var PriceIncrease = 1.1;
var WanderCooldown = 0;
var WanderReady = 1;
var WanderBaseCooldown = 10 ;
var TimesWandered = 0;
var FarmingLevel = 0;
var WoodcuttingLevel = 0;
var CombatLevel = 0;
var FishingLevel = 0;
var CraftingLevel = 0;
var ResearchLevel = 0;
var Playtime = 0;
var WanderRoll = 0;
var WanderEfficiency = 1;
var WanderBase = 1;
var WanderResourceGain = 0;
var WanderFoodGain = 0;
var WanderWoodGain = 0;
var WanderScrapGain = 0;
var CurrentHealth = 100;
var MaxHealth = 100;
var Strength = 0;
var Agility = 0;
var Intelligence = 0;
var Defence = 0;
var Busy = 0;
var CombatUnlocked = 0;
var EnemiesEncountered = 0;
var EnemiesDefeated = 0;
var Defeats = 0;
var EnemyMessage = "Bruh";
var EnemyCurrentHealth = 0;
var EnemyCurrentAttack = 0;
var EnemyCurrentAttackSpeed = 0;
var EnemyCurrentDamageReduction = 0;
var EnemyAttackCharge = 0;
var PlayerAttackCharge = 0;
var EnemyDeathMessage = "";
var ExperienceMultiplier = 0;
var FightEnemy = "";
var DoingSomething = 0;
var Fighting = 0;
var AttackDamage = 1;
var AttackSpeed = 0.5;
var DamageReduction = 0;
var DodgeChance = 0;
var EnemyDodgeChance = 0;
var EnemyMaxHealth = 0;
var HealthRegeneration = 1;

// Defining Functions
LoadingInfoId.innerHTML = "Forging Tools";
LoadingBarId.style.width = "6%";

function SaveItem(Item, Name){
  localStorage.setItem(Name, Item);
  console.log("Saving " + Name);
  console.log(localStorage.getItem(Name));
}
function LoadItem(Name){
  if(localStorage.getItem(Name) == null){
    console.log("Local " + Name + " Save not Found");
  }
  if(localStorage.getItem(Name) >= 1){
    console.log(Name + " Save Found");
    window[Name] = parseFloat(localStorage.getItem(Name), 10);
    console.log(localStorage.getItem(Name));
  }
}
function Save(){
  SaveItem(GameStage, "GameStage");
  SaveItem(Food, "Food");
  SaveItem(FoodDemand, "FoodDemand");
  SaveItem(FoodPerSecond, "FoodPerSecond");
  SaveItem(FoodDepleted, "FoodDepleted");
  SaveItem(ScavengeRoll, "ScavengeRoll");
  SaveItem(Wood, "Wood");
  SaveItem(Scrap, "Scrap");
  SaveItem(ScavengeEff, "ScavengeEff");
  SaveItem(ScavengeBase, "ScavengeBase");
  SaveItem(ScavengeFoodNum, "ScavengeFoodNum");
  SaveItem(ScavengeUnlocks, "ScavengeUnlocks");
  //SaveItem(LastInfo, "LastInfo");
  SaveItem(Scavenged, "Scavenged");
  SaveItem(WoodUnlocked, "WoodUnlocked");
  SaveItem(WoodPerSecond, "WoodPerSecond");
  SaveItem(ScrapPerSecond, "ScrapPerSecond");
  SaveItem(WoodDemand, "WoodDemand");
  SaveItem(ScrapDemand, "ScrapDemand")
  SaveItem(ScrapUnlocked, "ScrapUnlocked");
  SaveItem(FarmUnlocked, "FarmUnlocked");
  SaveItem(Farms, "Farms");
  SaveItem(FarmFoodProduction, "FarmFoodProduction");
  SaveItem(FarmPrice, "FarmPrice");
  SaveItem(FarmingUnlocked, "FarmingUnlocked");
  SaveItem(PriceIncrease, "PriceIncrease");
  SaveItem(WanderBaseCooldown, "WanderBaseCooldown");
  SaveItem(TimesWandered, "TimesWandered");
  SaveItem(WoodcuttingLevel, "WoodcuttingLevel");
  SaveItem(CombatLevel, "CombatLevel");
  SaveItem(FishingLevel, "FishingLevel");
  SaveItem(CraftingLevel, "CraftingLevel");
  SaveItem(FarmingLevel, "FarmingLevel");
  SaveItem(ResearchLevel, "ResearchLevel");
  SaveItem(Playtime, "Playtime");
  SaveItem(WanderEfficiency, "WanderEfficiency");
  SaveItem(WanderBase, "WanderBase");
  SaveItem(CurrentHealth, "CurrentHealth");
  SaveItem(MaxHealth, "CurrentHealth");
  SaveItem(Strength, "Strength");
  SaveItem(Agility, "Agility");
  SaveItem(Intelligence, "Intelligence");
  SaveItem(Defence, "Defence");
  SaveItem(CombatUnlocked, "CombatUnlocked");
  SaveItem(ExperienceMultiplier, "ExperienceMultiplier");
  SaveItem(AttackSpeed, "AttackSpeed");
  SaveItem(AttackDamage, "AttackDamage");
  SaveItem(DamageReduction, "DamageReduction");
  SaveItem(DodgeChance, "DodgeChance");
  SaveItem(HealthRegeneration, "HealthRegeneration");

  console.log("Game Saved");
  InfoAdd("Game Saved");
}
function ClearSave(){
  if(confirm("Are you sure?") == true){
    if(confirm("Are you REALLY sure? This will clear ALL progress") == true){
      localStorage.clear();
      console.log("Local Storage Cleared");
      window.location.reload();
    }
  }
}
function OpenHome(){
  HomeControlsId.style.visibility = "visible";
  WanderControlsId.style.visibility = "hidden";
  document.getElementById("FarmingControls").style.visibility = "hidden";
  document.getElementById("StatsControls").style.visibility = "hidden";
  document.getElementById("HealthBar").style.visibility = "hidden";
  document.getElementById("CurrentHealthDiv").style.visibility = "hidden";
  document.getElementById("WeaponDisplay").style.visibility = "hidden";
  document.getElementById("ArmorDisplay").style.visibility = "hidden";
  document.getElementById("AttackDisplay").style.visibility = "hidden";
  document.getElementById("DamageReductionDisplay").style.visibility = "hidden";
  document.getElementById("EnemyDisplay").style.visibility = "hidden";
  document.getElementById("WanderControlButtonsDiv").style.visibility = "hidden";
  document.getElementById("DodgeChanceDisplay").style.visibility = "hidden";
}
function OpenWander(){
  HomeControlsId.style.visibility = "hidden";
  WanderControlsId.style.visibility = "visible";
  document.getElementById("FarmingControls").style.visibility = "hidden";
  document.getElementById("StatsControls").style.visibility = "hidden";
  if(CombatUnlocked == 1){
    document.getElementById("HealthBar").style.visibility = "visible";
    document.getElementById("CurrentHealthDiv").style.visibility = "visible";
    document.getElementById("WeaponDisplay").style.visibility = "visible";
    document.getElementById("ArmorDisplay").style.visibility = "visible";
    document.getElementById("AttackDisplay").style.visibility = "visible";
    document.getElementById("DamageReductionDisplay").style.visibility = "visible";
    document.getElementById("EnemyDisplay").style.visibility = "visible";
    document.getElementById("WanderControlButtonsDiv").style.visibility = "visible";
    document.getElementById("DodgeChanceDisplay").style.visibility = "visible";
  }
}
function OpenFarming(){
  HomeControlsId.style.visibility = "hidden";
  WanderControlsId.style.visibility = "hidden";
  document.getElementById("FarmingControls").style.visibility = "visible";
  document.getElementById("StatsControls").style.visibility = "hidden";
  document.getElementById("HealthBar").style.visibility = "hidden";
  document.getElementById("CurrentHealthDiv").style.visibility = "hidden";
  document.getElementById("WeaponDisplay").style.visibility = "hidden";
  document.getElementById("ArmorDisplay").style.visibility = "hidden";
  document.getElementById("AttackDisplay").style.visibility = "hidden";
  document.getElementById("DamageReductionDisplay").style.visibility = "hidden";
  document.getElementById("EnemyDisplay").style.visibility = "hidden";
  document.getElementById("WanderControlButtonsDiv").style.visibility = "hidden";
  document.getElementById("DodgeChanceDisplay").style.visibility = "hidden";
}
function OpenStats(){
  HomeControlsId.style.visibility = "hidden";
  WanderControlsId.style.visibility = "hidden";
  document.getElementById("FarmingControls").style.visibility = "hidden";
  document.getElementById("StatsControls").style.visibility = "visible";
  document.getElementById("HealthBar").style.visibility = "hidden";
  document.getElementById("CurrentHealthDiv").style.visibility = "hidden";
  document.getElementById("WeaponDisplay").style.visibility = "hidden";
  document.getElementById("ArmorDisplay").style.visibility = "hidden";
  document.getElementById("AttackDisplay").style.visibility = "hidden";
  document.getElementById("DamageReductionDisplay").style.visibility = "hidden";
  document.getElementById("EnemyDisplay").style.visibility = "hidden";
  document.getElementById("WanderControlButtonsDiv").style.visibility = "hidden";
  document.getElementById("DodgeChanceDisplay").style.visibility = "hidden";
}
function UpdateStats(){
  document.getElementById("FarmingStatsLevel").innerHTML = FarmingLevel.toString();
  document.getElementById("WoodcuttingStatsLevel").innerHTML = WoodcuttingLevel.toString();
  document.getElementById("CombatStatsLevel").innerHTML = CombatLevel.toString();
  document.getElementById("FishingStatsLevel").innerHTML = FishingLevel.toString();
  document.getElementById("CraftingStatsLevel").innerHTML = CraftingLevel.toString();
  document.getElementById("ResearchStatsLevel").innerHTML = ResearchLevel.toString();
  document.getElementById("TimesWanderedStat").innerHTML = TimesWandered.toString();
  document.getElementById("PlaytimeStat").innerHTML = ConvertPlayTime(Playtime);
  document.getElementById("MaxHealthStat").innerHTML = MaxHealth;
  document.getElementById("StrengthStat").innerHTML = Strength;
  document.getElementById("AgilityStat").innerHTML = Agility;
  document.getElementById("IntelligenceStat").innerHTML = Intelligence;
  document.getElementById("DefenceStat").innerHTML = Defence;
  document.getElementById("EnemiesEncounteredStat").innerHTML = EnemiesEncountered;
  document.getElementById("EnemiesDefeatedStat").innerHTML = EnemiesDefeated;
  document.getElementById("HealthRegenStat").innerHTML = HealthRegeneration;
}
function ConvertPlayTime(Time){
  ConvertedHours = Math.floor((Time / 60) / 60);
  Time -= (ConvertedHours * 60) * 60;
  ConvertedMinutes = Math.floor(Time/60);
  Time -= ConvertedMinutes * 60;
  ConvertedSeconds = Time;

  if(ConvertedHours > 1 || ConvertedHours == 0){
    if(ConvertedMinutes > 1 || ConvertedMinutes == 0){
      if(ConvertedSeconds > 1 || ConvertedSeconds == 0){
        ConvertedTime = ConvertedHours.toString() + " hours, " + ConvertedMinutes.toString() + " minutes, and " + ConvertedSeconds.toString() + " seconds";
      }
      if(ConvertedSeconds == 1){
        ConvertedTime = ConvertedHours.toString() + " hours, " + ConvertedMinutes.toString() + " minutes, and " + ConvertedSeconds.toString() + " second";
      }
    }
    if(ConvertedMinutes == 1){
      if(ConvertedSeconds > 1 || ConvertedSeconds == 0){
        ConvertedTime = ConvertedHours.toString() + " hours, " + ConvertedMinutes.toString() + " minute, and " + ConvertedSeconds.toString() + " seconds";
      }
      if(ConvertedSeconds == 1){
        ConvertedTime = ConvertedHours.toString() + " hours, " + ConvertedMinutes.toString() + " minute, and " + ConvertedSeconds.toString() + " second";
      }
    }
  }
  if(ConvertedHours == 1){
    if(ConvertedMinutes > 1 || ConvertedMinutes == 0){
      if(ConvertedSeconds > 1 || ConvertedSeconds == 0){
        ConvertedTime = ConvertedHours.toString() + " hour, " + ConvertedMinutes.toString() + " minutes, and " + ConvertedSeconds.toString() + " seconds";
      }
      if(ConvertedSeconds == 1){
        ConvertedTime = ConvertedHours.toString() + " hour, " + ConvertedMinutes.toString() + " minutes, and " + ConvertedSeconds.toString() + " second";
      }
    }
    if(ConvertedMinutes == 1){
      if(ConvertedSeconds > 1 || ConvertedSeconds == 0){
        ConvertedTime = ConvertedHours.toString() + " hour, " + ConvertedMinutes.toString() + " minute, and " + ConvertedSeconds.toString() + " seconds";
      }
      if(ConvertedSeconds == 1){
        ConvertedTime = ConvertedHours.toString() + " hour, " + ConvertedMinutes.toString() + " minute, and " + ConvertedSeconds.toString() + " second";
      }
    }
  }
  return(ConvertedTime);
}
function Scavenge(){
  ScavengeRoll = Math.floor((Math.random() * ScavengeUnlocks) + 1);
  if(ScavengeRoll == 1){
    ScavengeFoodNum += Math.floor((Math.random() * ScavengeEff) + ScavengeBase);
  }
  if(ScavengeRoll == 2){
    ScavengeWoodNum += Math.floor((Math.random() * ScavengeEff) + ScavengeBase);
  }
  if(ScavengeRoll == 3){
    ScavengeScrapNum += Math.floor((Math.random() * ScavengeEff) + ScavengeBase);
  }
  Scavenged = 1;
  ScavengeRoll = 0;
}
function InfoAdd(Info){
  if(Info != LastInfo){
    InfoBox.innerHTML = Info + "<br>" + InfoBox.innerHTML;
  }
  //LastInfo = Info;
}
function Refresh(){
  FoodId.innerHTML = Food;
  FoodInfoId.innerHTML = FoodPerSecond.toString() + " / tick";
  WoodId.innerHTML = Wood;
  WoodInfoId.innerHTML = WoodPerSecond.toString() + " / tick";
  ScrapId.innerHTML = Scrap;
  ScrapInfoId.innerHTML = ScrapPerSecond.toString() + " / tick";

  WanderFoodGain = 0;
  WanderWoodGain = 0;
  WanderScrapGain = 0;

  document.getElementById("EnemyName").innerHTML = FightEnemy.toString();
  document.getElementById("EnemyHealth").innerHTML = EnemyCurrentHealth.toString();
  document.getElementById("EnemyAttack").innerHTML = EnemyCurrentAttack.toString();
  document.getElementById("EnemyAttackSpeed").innerHTML = EnemyCurrentAttackSpeed.toString();
  document.getElementById("EnemyDamageReduction").innerHTML = ((EnemyCurrentDamageReduction * 100)).toString();
  document.getElementById("CurrentHealth").innerHTML = CurrentHealth.toString();

  document.getElementById("HealthBar").style.width = ((CurrentHealth / MaxHealth) * 31).toString() + "%";

  UpdateStats();
}
function BuyFarm(){
  if(Wood >= FarmPrice){
    Farms += 1;
    Wood -= FarmPrice;
    console.log(FarmPrice);
    FarmPrice = Math.round(FarmPrice * PriceIncrease);
    console.log(FarmPrice);
    InfoAdd("You built a farm");
  }
  else{
    InfoAdd("You don't have enough resources");
  }
  FarmInfo(1);
}
function ScavengeInfo(Toggle){
  document.getElementById("ScavengeButtonInfo").innerHTML = "Scavenge for materials in the dirt <hr>" + "Base: " + ScavengeBase + "<br>Eff: " + ScavengeEff;
  if(Toggle == 1){
    document.getElementById("ScavengeButtonInfo").style.display = "block";
  }
  if(Toggle == 0){
    document.getElementById("ScavengeButtonInfo").style.display = "none";
  }
}
function FarmInfo(Toggle){
  document.getElementById("FarmButtonInfo").innerHTML = "A farm used for growing food <br> You have " + Farms + " farm(s) <hr> Wood: " + FarmPrice + "<hr>" + FarmFoodProduction + " Food / tick <br>" + " Unlocks Farming";
  if(Toggle == 1){
    document.getElementById("FarmButtonInfo").style.display = "block";
  }
  if(Toggle == 0){
    document.getElementById("FarmButtonInfo").style.display = "none";
  }
}
function ProductionCalculations(){
  FoodPerSecond = 0;
  WoodPerSecond = 0;
  ScrapPerSecond = 0;
}
function Story(){
  if(GameStage == 0){
    InfoAdd("You wake up in a desolate world");
    GameStage += 1;
  }
}
function Unlocks(){
  if(WoodUnlocked == 0 && Wood > 0){
    document.getElementById("WoodDiv").style.display = "block";
    WoodUnlocked = 1;
  }
  if(ScrapUnlocked == 0 && Scrap > 0){
    document.getElementById("ScrapDiv").style.display = "block";
    ScrapUnlocked = 0;
  }
  if(FarmUnlocked == 0 && Wood >= 50){
    document.getElementById("FarmButton").style.display = "block";
    FarmUnlocked = 1;
  }
  if(FarmingUnlocked == 0 && Farms >= 1){
    document.getElementById("FarmingLink").style.display = "inline-block";
    FarmingUnlocked = 1;
  }
  if(CombatUnlocked == 0 && EnemiesEncountered >> 0){
    document.getElementById("HealthBar").style.visibility = "visible";
    document.getElementById("CurrentHealthDiv").style.visibility = "visible";
    document.getElementById("WeaponDisplay").style.visibility = "visible";
    document.getElementById("ArmorDisplay").style.visibility = "visible";
    document.getElementById("AttackDisplay").style.visibility = "visible";
    document.getElementById("DamageReductionDisplay").style.visibility = "visible";
    document.getElementById("EnemyDisplay").style.visibility = "visible";
    document.getElementById("WanderControlButtonsDiv").style.visibility = "visible";
    CombatUnlocked = 1;
  }
}
function PreUnlocks(){
  if(WoodUnlocked == 1){
    document.getElementById("WoodDiv").style.display = "block";
  }
  if(FarmUnlocked == 1){
    document.getElementById("FarmButton").style.display = "block";
  }
  if(ScrapUnlocked == 1){
    document.getElementById("ScrapDiv").style.display = "block";
  }
  if(FarmingUnlocked == 1){
    document.getElementById("FarmingLink").style.display = "inline-block";
  }
}
function ScavengeCalc(){
  if(Scavenged == 1){
    InfoAdd("You found " + ScavengeFoodNum.toString() + " food, " + ScavengeWoodNum.toString() + " wood, and " + ScavengeScrapNum.toString() + " scrap " + " while scavenging")
    FoodPerSecond += ScavengeFoodNum;
    WoodPerSecond += ScavengeWoodNum;
    ScrapPerSecond += ScavengeScrapNum;
    Scavenged = 0;
    ScavengeFoodNum = 0;
    ScavengeWoodNum = 0;
    ScavengeScrapNum = 0;
  }
}
function FoodCalc(){
  FoodPerSecond += Farms * FarmFoodProduction;

  FoodPerSecond -= FoodDemand;
  FoodPerSecond += WanderFoodGain;

  if(Starving >= 1){
    FoodPerSecond = FoodPerSecond/4;
  }

  FoodPerSecond = Math.round(FoodPerSecond * 100) / 100;

  Food += FoodPerSecond;
  Food = Math.round(Food * 100) / 100;

  if(Food < 0){
    Food = 0;
  }

  if(Food == 0){
    if(FoodDepleted == 0){
      InfoAdd("Your food stores are depleted");
    }
    if(FoodDepleted == 1){
      Starving += 0.25;
      if(Starving == 1){
        InfoAdd("You are starving");
      }
    }
    FoodDepleted = 1;
  }

  if(FoodDepleted == 1 && Food > 0){
    FoodDepleted = 0;
    Starving = 0;
  }
}
function WoodCalc(){
  WoodPerSecond -= WoodDemand;
  WoodPerSecond += WanderWoodGain;
  WoodPerSecond = Math.round(WoodPerSecond * 100) / 100;

  if(Wood < 0){
    Wood = 0;
  }

  if(Starving >= 1){
    WoodPerSecond = WoodPerSecond/4;
  }

  Wood += WoodPerSecond;
  Wood = Math.round(Wood * 100) / 100;
}
function ScrapCalc(){
  ScrapPerSecond -= ScrapDemand;
  ScrapPerSecond += WanderScrapGain;
  ScrapPerSecond = Math.round(ScrapPerSecond * 100) / 100;

  if(Scrap < 0){
    Scrap = 0;
  }

  if(Starving >= 1){
    ScrapPerSecond = ScrapPerSecond/4;
  }

  Scrap += ScrapPerSecond
  Scrap = Math.round(Scrap * 100) / 100;
}
function WanderingCooldown(){
  if(WanderCooldown > 0){
    document.getElementById("WanderCooldown").style.width = (31 - ((31/WanderBaseCooldown) * WanderCooldown)).toString() + "%";
    WanderCooldown -= 1;
    if(WanderCooldown > 0){
      setTimeout(WanderingCooldown, 50);
    }
  }
  if(WanderCooldown <= 0){
    WanderReady = 1;
    document.getElementById("WanderCooldown").style.width = "31%";
    return;
  }
}
function Wander(){
  if(WanderReady == 0){
    InfoAdd("You are too tired to keep wandering");
  }
  if(Fighting == 1){
    InfoAdd("You are currently fighting");
  }
  if(WanderReady == 1 && Fighting == 0){
    WanderCooldown = WanderBaseCooldown;
    TimesWandered += 1;

    WanderingCooldown();
    WanderCalc();
    Unlocks();

    WanderReady = 0;
  }
}
function WanderCalc(){
  WanderRoll = Math.floor(Math.random() * 500);
  if(0 <= WanderRoll && WanderRoll <= 100){
    InfoAdd("You wander aimlessly but find nothing");
  }
  if(100 < WanderRoll && WanderRoll <= 350){
    WanderRoll = Math.floor(Math.random() * 3);

    if(WanderRoll == 0){
      console.log(Food);
      WanderResourceGain = Math.round(((Food/10) * WanderEfficiency + WanderBase) * 100) / 100;
      InfoAdd("You found " + WanderResourceGain + " food on your journey");
      WanderFoodGain += WanderResourceGain;
    }
    if(WanderRoll == 1){
      WanderResourceGain = Math.round(((Wood/10) * WanderEfficiency + WanderBase) * 100) / 100;
      InfoAdd("You found " + WanderResourceGain + " wood on your journey");
      WanderWoodGain += WanderResourceGain;
    }
    if(WanderRoll == 2){
      WanderResourceGain = Math.round(((Scrap/10) * WanderEfficiency + WanderBase) * 100) / 100;
      InfoAdd("You found " + WanderResourceGain + " Scrap on your journey");
      WanderScrapGain += WanderResourceGain;
    }
  }
  if(350 < WanderRoll && WanderRoll <= 450){
    EnemiesEncountered += 1;
    WanderRoll = Math.floor(Math.random() * 50);
    if(CombatLevel <= 10){
      if(WanderRoll >= 0 && WanderRoll < 10){
        InfoAdd("You encountered a spider on your journey");
        FightEnemy = "Spider";
        Fight();
      }
      if(WanderRoll >= 10 && WanderRoll < 20){
        InfoAdd("You bumped into a mouse with your foot");
        FightEnemy = "Mouse";
        Fight();
      }
      if(WanderRoll >= 20 && WanderRoll < 25){
        InfoAdd("A small rabbit aggresively attempts to bump its head against your ankle");
        FightEnemy = "Rabbit";
        Fight();
      }
      if(WanderRoll >= 25 && WanderRoll < 30){
        InfoAdd("A rat blocks your path");
        FightEnemy = "Rat";
        Fight();
      }
      if(WanderRoll >= 30 && WanderRoll < 35){
        InfoAdd("A gopher tunnels up to meet you");
        FightEnemy = "Gopher";
        Fight();
      }
      if(WanderRoll >= 35 && WanderRoll < 40){
        InfoAdd("You run into a small swarm of wasps");
        FightEnemy = "Wasps";
        Fight();
      }
      if(WanderRoll >= 40 && WanderRoll < 45){
        InfoAdd("A crow lands on your head and starts attacking you");
        FightEnemy = "Crow";
        Fight();
      }
      if(WanderRoll >= 45 && WanderRoll <= 50){
        InfoAdd("You bump your head on a beehive. Uh oh")
        FightEnemy = "Beehive";
        Fight();
      }
    }
  }
  if(450 < WanderRoll && WanderRoll <= 500){
    //Find special characters and easter eggs/references
  }
}
function Fight(){
  Fighting = 1;
  EnemyAttackCharge = 0;
  PlayerAttackCharge = 0;
  if(FightEnemy == "Spider"){
    EnemyMaxHealth = 5;
    EnemyCurrentHealth = 5;
    EnemyCurrentAttack = 0.5;
    EnemyCurrentAttackSpeed = 0.5;
    EnemyCurrentDamageReduction = 0;
    EnemyDodgeChance = 0;
    EnemyDeathMessage = "You defeated the spider. Good job.";
    EnemyMessage = "The spider bit you, dealing " + (EnemyCurrentAttack * (1 - EnemyCurrentDamageReduction)) + " damage";
  }
  if(FightEnemy == "Rabbit"){
    EnemyMaxHealth = 15;
    EnemyCurrentHealth = 15;
    EnemyCurrentAttack = 0;
    EnemyCurrentAttackSpeed = 0.25;
    EnemyCurrentDamageReduction = 0;
    EnemyDodgeChance = 0;
    EnemyDeathMessage = "You killed a defenseless rabbit. Nice.";
    EnemyMessage = "The rabbit lightly bumped its head on your leg, dealing " + (EnemyCurrentAttack * (1 - EnemyCurrentDamageReduction)) + " damage";
  }
  if(FightEnemy == "Mouse"){
    EnemyMaxHealth = 10;
    EnemyCurrentHealth = 10;
    EnemyCurrentAttack = 1;
    EnemyCurrentAttackSpeed = 0.50;
    EnemyCurrentDamageReduction = 0;
    EnemyDodgeChance = 0;
    EnemyDeathMessage = "You squashed the mouse. ewww";
    EnemyMessage = "The mouse bit you, dealing " + (EnemyCurrentAttack * (1 - EnemyCurrentDamageReduction)) + " damage";
  }
  if(FightEnemy == "Rat"){
    EnemyMaxHealth = 15;
    EnemyCurrentHealth = 15;
    EnemyCurrentAttack = 2;
    EnemyCurrentAttackSpeed = 0.50;
    EnemyCurrentDamageReduction = 0;
    EnemyDodgeChance = 0;
    EnemyDeathMessage = "You killed the rat";
    EnemyMessage = "The rat scratched you, dealing " + (EnemyCurrentAttack * (1 - EnemyCurrentDamageReduction)) + " damage";
  }
  if(FightEnemy == "Gopher"){
    EnemyMaxHealth = 20;
    EnemyCurrentHealth = 20;
    EnemyCurrentAttack = 2.5;
    EnemyCurrentAttackSpeed = 0.50;
    EnemyCurrentDamageReduction = 0;
    EnemyDodgeChance = 0;
    EnemyDeathMessage = "You walk past the gopher's dead body. It won't be tripping anyone else.";
    EnemyMessage = "The gopher dug a whole under you, dealing " + (EnemyCurrentAttack * (1 - EnemyCurrentDamageReduction)) + " damage";
  }
  if(FightEnemy == "Wasps"){
    EnemyMaxHealth = 15;
    EnemyCurrentHealth = 15;
    EnemyCurrentAttack = 0.25;
    EnemyCurrentAttackSpeed = 2;
    EnemyCurrentDamageReduction = 0;
    EnemyDodgeChance = 50;
    EnemyDeathMessage = "You bat away the wasps and continue on your way.";
    EnemyMessage = "A wasp darts out of the swarm and stings you, dealing " + (EnemyCurrentAttack * (1 - EnemyCurrentDamageReduction)) + " damage";
  }
  if(FightEnemy == "Crow"){
    EnemyMaxHealth = 30;
    EnemyCurrentHealth = 30;
    EnemyCurrentAttack = 10;
    EnemyCurrentAttackSpeed = 0.25;
    EnemyCurrentDamageReduction = 0;
    EnemyDodgeChance = 10;
    EnemyDeathMessage = "The crow flaps its wings weakly on the ground, bleeding.";
    EnemyMessage = "The crow pecked you in the eye, dealing " + (EnemyCurrentAttack * (1 - EnemyCurrentDamageReduction)) + " damage";
  }
  if(FightEnemy == "Beehive"){
    EnemyMaxHealth = 50;
    EnemyCurrentHealth = 50;
    EnemyCurrentAttack = 1;
    EnemyCurrentAttackSpeed = 5;
    EnemyCurrentDamageReduction = 0;
    EnemyDodgeChance = 0;
    EnemyDeathMessage = "You squashed the mouse. ewww";
    EnemyMessage = "Bees fly out of the beehive and sting you, dealing " + (EnemyCurrentAttack * (1 - EnemyCurrentDamageReduction)) + " damage";
  }

  document.getElementById("EnemyName").innerHTML = FightEnemy.toString();
  document.getElementById("EnemyHealth").innerHTML = EnemyCurrentHealth.toString();
  document.getElementById("EnemyAttack").innerHTML = EnemyCurrentAttack.toString();
  document.getElementById("EnemyAttackSpeed").innerHTML = EnemyCurrentAttackSpeed.toString();
  document.getElementById("EnemyDamageReduction").innerHTML = (EnemyCurrentDamageReduction * 100).toString();
  FightCalc();
}
function FightCalc(Enemy){
  if(EnemyCurrentHealth > 0 && CurrentHealth > 0){
    EnemyAttackCharge += EnemyCurrentAttackSpeed/10;
    PlayerAttackCharge += AttackSpeed/10;
    if(PlayerAttackCharge >= 1){
      if((Math.floor(Math.random(100))) <= (100 - EnemyDodgeChance)){
        EnemyCurrentHealth -= AttackDamage * (1 - EnemyCurrentDamageReduction);
        InfoAdd("You hit the " + FightEnemy + " for " + AttackDamage * (1 - EnemyCurrentDamageReduction) + " damage");
        PlayerAttackCharge = 0;
      }
      else{
        if(FightEnemy == "Crow" || FightEnemy == "Wasps"){
          if(FightEnemy == "Crow"){
            InfoAdd("The crow flew out of the way of your attack");
          }
          if(FightEnemy == "Wasps"){
            InfoAdd("The wasps dart of of the way and dodge your attack");
          }
        }
        else{
          InfoAdd("The " + FightEnemy + " dodged your attack");
        }
      }
    }
    if(EnemyAttackCharge >= 1 && EnemyCurrentHealth > 0){
      if((Math.floor(Math.random(100))) <= (100 - DodgeChance)){
        CurrentHealth -= EnemyCurrentAttack * (1 - DamageReduction);
        InfoAdd(EnemyMessage);
        EnemyAttackCharge = 0;
      }
      else{
        InfoAdd("You dodged the " + FightEnemy + "'s attack'");
      }
    }
  }
  if(EnemyCurrentHealth <= 0){
    InfoAdd(EnemyDeathMessage);
    document.getElementById("EnemyName").innerHTML = "None";
    document.getElementById("EnemyHealth").innerHTML = "0";
    document.getElementById("EnemyAttack").innerHTML = "0";
    document.getElementById("EnemyAttackSpeed").innerHTML = "0";
    document.getElementById("EnemyDamageReduction").innerHTML = "0";
    EnemiesDefeated += 1;
    Fighting = 0;
    if(FightEnemy == "Spider"){
      FoodPerSecond += (3 + WanderBase) * WanderEfficiency;
      InfoAdd("You gained " + ((3 + WanderBase) * WanderEfficiency).toString() + " food from the spider")
    }
    if(FightEnemy == "Rabbit"){
      FoodPerSecond += (20 + WanderBase) * WanderEfficiency;
      InfoAdd("You gained " + ((20 + WanderBase) * WanderEfficiency).toString() + " food from the rabbit")
    }
    if(FightEnemy == "Mouse"){
      FoodPerSecond += (10 + WanderBase) * WanderEfficiency;
      InfoAdd("You gained " + ((10 + WanderBase) * WanderEfficiency).toString() + " food from the mouse")
    }
    if(FightEnemy == "Rat"){
      FoodPerSecond += (13 + WanderBase) * WanderEfficiency;
      InfoAdd("You gained " + ((13 + WanderBase) * WanderEfficiency).toString() + " food from the rat")
    }
    if(FightEnemy == "Gopher"){
      FoodPerSecond += (15 + WanderBase) * WanderEfficiency;
      InfoAdd("You gained " + ((15 + WanderBase) * WanderEfficiency).toString() + " food from the gopher")
    }
    if(FightEnemy == "Wasps"){
      FoodPerSecond += (7 + WanderBase) * WanderEfficiency;
      InfoAdd("You gained " + ((7 + WanderBase) * WanderEfficiency).toString() + " food from the wasps")
    }
    if(FightEnemy == "Crow"){
      FoodPerSecond += (15 + WanderBase) * WanderEfficiency;
      InfoAdd("You gained " + ((15 + WanderBase) * WanderEfficiency).toString() + " food from the crow")
    }
    if(FightEnemy == "Beehive"){
      FoodPerSecond += (25 + WanderBase) * WanderEfficiency;
      InfoAdd("You gained " + ((25 + WanderBase) * WanderEfficiency).toString() + " from the beehive ")
    }
  }
  if(CurrentHealth <= 0){
    InfoAdd("You were defeated by a(n) " + FightEnemy)
    document.getElementById("EnemyName").innerHTML = "None";
    document.getElementById("EnemyHealth").innerHTML = "0";
    document.getElementById("EnemyAttack").innerHTML = "0";
    document.getElementById("EnemyAttackSpeed").innerHTML = "0";
    document.getElementById("EnemyDamageReduction").innerHTML = "0";
    Fighting = 0;
  }
  if(CurrentHealth > 0 && EnemyCurrentHealth > 0){
    setTimeout("FightCalc()", 100);
    document.getElementById("EnemyName").innerHTML = FightEnemy.toString();
    document.getElementById("EnemyHealth").innerHTML = EnemyCurrentHealth.toString();
    document.getElementById("EnemyAttack").innerHTML = EnemyCurrentAttack.toString();
    document.getElementById("EnemyAttackSpeed").innerHTML = EnemyCurrentAttackSpeed.toString();
    document.getElementById("EnemyDamageReduction").innerHTML = ((EnemyCurrentDamageReduction * 100)).toString();
    document.getElementById("CurrentHealth").innerHTML = CurrentHealth.toString();
  }
  document.getElementById("HealthBar").style.width = ((CurrentHealth / MaxHealth) * 31).toString() + "%";
  document.getElementById("EnemyHealthBar").style.width = ((EnemyCurrentHealth / EnemyMaxHealth) * 31).toString() + "%";
}
function Encounter(Thing){

}
function Main(){
  if(CurrentHealth < MaxHealth && Fighting == 0){
    CurrentHealth += HealthRegeneration;
  }
  if(CurrentHealth >= MaxHealth && Fighting == 0){
    CurrentHealth  = MaxHealth;
  }

  ProductionCalculations();

  Story();

  Unlocks();

  ScavengeCalc();

  FoodCalc();

  WoodCalc();

  ScrapCalc();

  //Final Commands
  Refresh();
  setTimeout(Main, 1000);
  Playtime += 1;
}

// Loading Save
LoadingInfoId.innerHTML = "Gathering Knowledge";
LoadingBarId.style.width = "8%";

LoadItem("Food");
LoadItem("GameStage");
LoadItem("FoodDemand");
LoadItem("FoodPerSecond");
LoadItem("ScavengeRoll");
LoadItem("Wood");
LoadItem("Scrap");
LoadItem("ScavengeEff");
LoadItem("ScavengeBase");
LoadItem("ScavengeFoodNum");
LoadItem("ScavengeWoodNum");
LoadItem("ScavengeScrapNum");
LoadItem("ScavengeUnlocks");
//LoadItem("ScavengeInfo");
LoadItem("Scavenged");
LoadItem("WoodUnlocked");
LoadItem("WoodPerSecond");
LoadItem("ScrapPerSecond");
LoadItem("WoodDemand");
LoadItem("ScrapDemand");
LoadItem("ScrapUnlocked");
LoadItem("FarmUnlocked");
LoadItem("Farms");
LoadItem("FarmFoodProduction");
LoadItem("FarmPrice");
LoadItem("FarmingUnlocked");
LoadItem("PriceIncrease");
LoadItem("WanderBaseCooldown");
LoadItem("TimesWandered");
LoadItem("FarmingLevel");
LoadItem("WoodcuttingLevel");
LoadItem("CombatLevel");
LoadItem("FishingLevel");
LoadItem("CraftingLevel");
LoadItem("ResearchLevel");
LoadItem("Playtime");
LoadItem("WanderBase");
LoadItem("WanderEfficiency");
LoadItem("CurrentHealth");
LoadItem("MaxHealth");
LoadItem("Strength");
LoadItem("Intelligence");
LoadItem("Agility");
LoadItem("Defence");
LoadItem("CombatUnlocked");
LoadItem("ExperienceMultiplier");
LoadItem("AttackSpeed");
LoadItem("AttackDamage");
LoadItem("DamageReduction");
LoadItem("DodgeChance");
LoadItem("HealthRegeneration");

//Showing Game ELements
LoadingInfoId.innerHTML = "Revealing Secrets";
LoadingBarId.style.width = "10%";

document.getElementById("Main").style.display = "flex";
document.getElementById("LoadingDiv").style.display = "none";
PreUnlocks();

//Starting Game
Main();
